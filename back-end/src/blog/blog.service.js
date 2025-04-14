//functionya re-usable

import {
    deleteBlog,
    editQueue,
    findAllBlogs,
    findBlogByTitle,
    findBlogById,
    insertBlog,
    findBlogBySlug
} from './blog.repository.js'
import dayjs from 'dayjs'
import 'dayjs/locale/id.js'

dayjs.locale('id') // Set locale ke bahasa Indonesia
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import { asc, desc, ilike, and, or, eq, like, sql } from 'drizzle-orm'
import { blog, blogCategory, user } from '../../drizzle/schema.js'

export const getAllBlogs = async (filters) => {
    try {
        const {
            page = 1,
            limit = 10,
            status,
            orderBy,
            search,
            favorite,
            categoryId,
        } = filters

        const skip = (page - 1) * limit

        const whereConditions = []

        if (status !== undefined) whereConditions.push(eq(blog.status, status))
        if (categoryId !== undefined){
            whereConditions.push(eq(blog.categoryId, categoryId))

        }
        if (favorite !== undefined)
            whereConditions.push(eq(blog.favorite, favorite))

        if (search) {
            const keyword = `%${search.toLowerCase()}%`

            const searchFilters = [
                like(blog.title, keyword),
                like(user.name, keyword),
                like(blog.status, keyword),
            ]

            whereConditions.push(or(...searchFilters))
        }

        const where = whereConditions.length
            ? and(...whereConditions)
            : undefined

        const order = (orderBy || []).map((item) => {
            const field = Object.keys(item)[0]
            const direction = item[field]
            return direction === 'desc' ? desc(blog[field]) : asc(blog[field])
        })
        const { datas, total } = await findAllBlogs(skip, limit, where, order)

        const totalPages = Math.ceil(total / limit)

        return {
            data: datas,
            pagination: {
                total,
                totalPages,
                currentPage: page,
                perPage: limit,
            },
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

export const getBlogById = async (id) => {
    try {
        const blog = await findBlogById(id) || await findBlogBySlug(id)
        return blog
    } catch (error) {
        throw new Error(error.message)
    }
}

export const createBlog = async (payload) => {
    try {
        const existingBlog = await findBlogByTitle(payload.title)
        if (existingBlog) {
            throw new Error('Title already exists')
        }

        const slug = payload.title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')

        await insertBlog({ ...payload, slug })
    } catch (error) {
        console.error('POST / error:', error)
        throw new Error(error.message || 'Error inserting blog')
    }
}

export const deleteBlogById = async (id) => {
    try {
        const blog = await getBlogById(id)
        if (!blog) {
            throw new Error('Blog with that ID not found')
        }
        const imagePath = path.join(__dirname, '../../upload', blog.image)
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath)
        }
        await deleteBlog(id)
    } catch (error) {
        throw new Error(error.message)
    }
}

export const updateQueue = async (id, payload) => {
    try {
        const queue = await findQueueById(id)
        if (!queue) {
            throw new Error('Blog dengan Id tersebut tidak ditemukan')
        }

        const { image, favorite } = payload
        if (image) {
            const imagePath = path.join(__dirname, '../../upload', queue.image)
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath)
            }
        }
        let newFavorite = favorite

        if (typeof favorite === 'string') {
            newFavorite = favorite === 'true'
        }

        const response = await getAllQueueByFavorite({ favorite: true })

        if (favorite === true && response.length >= 3) {
            throw new Error('Maksimal 3 blog favorit')
        }

        await editQueue(id, { ...payload, favorite: newFavorite })
    } catch (error) {
        throw new Error(error.message)
    }
}
