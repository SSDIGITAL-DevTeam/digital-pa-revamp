import express from 'express'
import {
    createLead,
    deleteLeadById,
    getAllLeads,
    getLeadById,
    updateLead,
} from './lead.service.js'
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
        console.log(orderByParams)

        const filters = {
            page,
            limit,
            search,
            orderBy: orderByParams,
            createdAt,
        }

        const data = await getAllLeads(filters)
        res.status(200).json(data)
    } catch (error) {
        logger.error(`GET / error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await getLeadById(id)
        res.status(200).json(data)
    } catch (error) {
        logger.error(`GET /:id error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
    try {
        const { name, email, phone, business, companyName, from, token, isAgree } =
            req.body

        if (
            !name?.trim() ||
            !email?.trim() ||
            !phone?.trim() ||
            !business?.trim() ||
            !companyName?.trim() ||
            !from?.trim() ||
            !token?.trim() ||
            isAgree === undefined
        ) {
            return res.status(400).json({ error: 'All fields are required' })
        }
        await createLead(req.body)

        res.status(201).json({ message: 'Lead created successfully' })
    } catch (error) {
        logger.error(`POST / error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await deleteLeadById(id)

        res.status(200).json({ message: 'Delete Blog Successfully' })
    } catch (error) {
        logger.error(`DELETE /:id error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

//Ubah data - hanya kolom yang diisi
router.put('/:id', async (req, res) => {
    try {
        const { name, email, phone, business, message, from } =
            req.body

        if (
            !name?.trim() ||
            !email?.trim() ||
            !phone?.trim() ||
            !business?.trim() ||
            !message?.trim() ||
            !from?.trim()
        ) {
            return res.status(400).json({ error: 'All fields are required' })
        }

        await updateLead(id, req.body)

        res.status(200).json({ message: 'Lead edited successfully' })
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
        await updateLead(id, req.body)

        res.status(200).json({ message: 'Lead edited successfully' })
    } catch (error) {
        logger.error(`PATCH /:id error: ${error.message}`)
        res.status(400).json({ error: error.message })
    }
})

export default router
