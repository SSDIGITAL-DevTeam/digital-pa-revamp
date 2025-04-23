import express from 'express'
import jwt from 'jsonwebtoken'
import { encryptPassword } from '../../user/user.service.js'
import { editUser, findUserById } from '../../user/user.repository.js'

const router = express.Router()

router.post('/', async (req, res) => {
    try {
        const { token, newPassword } = req.body
        const decoded = jwt.verify(token, process.env.RESET_TOKEN_SECRET)
        const userData = await findUserById(decoded.id)
        // console.log(user)
        if (!userData) {
            return res.status(404).json({ error: 'User not found' })
        }
        const hashed = await encryptPassword(newPassword)
        await editUser(userData.id, {password : hashed})

        res.status(201).json({ message: 'Password updated successfully' })
    } catch (error) {
        console.error('POST / reset-password error:', error)
        return res.status(400).json({ error: 'Invalid or expired token' })
    }
})

export default router
