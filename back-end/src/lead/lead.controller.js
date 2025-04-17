import express from 'express'
import {
    createLead,
    deleteBlogById,
    getAllLeads,
    // getLeadById,
    updateQueue,
} from './lead.service.js'

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
        // const data = await getAllBlogCat(filters)
        // res.status(200).json(data)

        const data = await getAllLeads(filters)
        res.status(200).json(data)
    } catch (error) {
        console.error('GET / error:', error)
        res.status(400).json({ error: error.message })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const data = await getLeadById(id)
        res.status(200).json(data)
    } catch (error) {
        console.error('GET /:id error:', error)
        res.status(400).json({ error: error.message })
    }
})

router.post('/', async (req, res) => {
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
        await createLead(req.body)

        res.status(201).json({ message: 'Lead created successfully' })
    } catch (error) {
        console.error('POST / error:', error)
        res.status(400).json({ error: error.message })
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const id = req.params.id
        await deleteBlogById(id)

        res.status(200).json({ message: 'Delete Blog Successfully' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

//Ubah data - semua kolom harus terisi
router.put('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const { title, content, status, favorite, categoryId } = req.body

        // Validasi manual basic
        if (
            !title ||
            !content ||
            !status ||
            favorite === undefined ||
            !categoryId
        ) {
            throw new Error('Semua field wajib diisi')
        }

        const isFavorite = favorite === 'true'
        await updateQueue(id, { ...payload, favorite: isFavorite })
        res.status(200).json({ message: 'Berhasil Mengubah Blog' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

//Ubah data - hanya kolom yang diisi
router.patch('/:id', async (req, res) => {
    try {
        const id = req.params.id

        if (!req.body || Object.keys(req.body).length === 0) {
            throw new Error('Nothing to update')
        }

        // console.log(req.body)
        const payload = { ...req.body }

        if (req.file) {
            payload.image = req.file.filename
        } else {
            delete payload.image
        }
        await updateQueue(id, payload)

        res.status(200).json({ message: 'Blog edited successfully' })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
})

export default router
