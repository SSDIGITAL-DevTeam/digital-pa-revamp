import express from 'express'
import {
//     getAllDemos,
//     getDemoById,
    createDemo,
//     deleteLeadById,
//     updateDemo,
} from './demo.service.js'
import logger from '../../utils/logger.js'

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        let {
            page = 1,
            limit = 10,
            orderBy,
            search,
            createdAt,
        } = req.query
        page = Math.max(parseInt(page) || 1, 1)
        limit = Math.max(parseInt(limit) || 10, 1)

        let orderByParams = []
        if (orderBy) {
            orderByParams = String(orderBy)
                .split(',')
                .map((order) => {
                    const [field, dir] = order.split(':')
                    return { [field]: dir === 'desc' ? 'desc' : 'asc' }
                })
        }

        const filters = {
            page,
            limit,
            search,
            orderBy: orderByParams,
            createdAt,
        }

        // const data = await getAllDemos(filters)
        // res.status(200).json(data)
        res.status(200).json({ message: 'Free Demo' })
    } catch (error) {
        logger.error(`GET / error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        // const data = await getDemoById(id)
        // res.status(200).json(data)
        res.status(200).json({ message: 'Free Demo' })
    } catch (error) {
        logger.error(`GET /:id error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const { name, email, phoneNumber, companyName, industry, companySize, token } =
            req.body

        if (
            !name?.trim() ||
            !email?.trim() ||
            !phoneNumber?.trim() ||
            !companyName?.trim() ||
            !industry?.trim() ||
            !companySize?.trim() ||
            !token?.trim()
        ) {
            return res.status(400).json({ error: 'All fields are required' })
        }
        await createDemo(req.body)

        res.status(201).json({ message: 'Free Demo created successfully' })
    } catch (error) {
        logger.error(`POST / error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        // await deleteLeadById(id)
        res.status(200).json({ message: 'Delete Free Demo Successfully' })
    } catch (error) {
        logger.error(`DELETE /:id error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

router.put('/:id', async (req, res) => {
    try {
         const { name, email, phoneNumber, companyName, industry, companySize, token } =
            req.body

        if (
            !name?.trim() ||
            !email?.trim() ||
            !phoneNumber?.trim() ||
            !companyName?.trim() ||
            !industry?.trim() ||
            !companySize?.trim() ||
            !token?.trim()
        ) {
            return res.status(400).json({ error: 'All fields are required' })
        }
        // await updateDemo(id, req.body)

        res.status(200).json({ message: 'Free Demo edited successfully' })
    } catch (error) {
        logger.error(`PUT /:id error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id

        if (!req.body || Object.keys(req.body).length === 0) {
            throw new Error('Nothing to update')
        }
        // await updateDemo(id, req.body)

        res.status(200).json({ message: 'Free Demo edited successfully' })
    } catch (error) {
        logger.error(`PATCH /:id error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

export default router
