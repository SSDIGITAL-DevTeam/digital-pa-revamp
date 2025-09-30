//functionya re-usable

import {
    deleteBlog,
    editQueue,
    findAllBlogs,
    findBlogByTitle,
    findBlogById,
    insertBlog,
    findBlogBySlug,
    checkBlogFavorite,
} from './blog.repository.js'
import dayjs from 'dayjs'
import 'dayjs/locale/id.js'

dayjs.locale('id') // Set locale ke bahasa Indonesia
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
import { asc, desc, and, or, eq, like, gte ,ne} from 'drizzle-orm'
import { blog } from '../../drizzle/schema.js'
import logger from '../../utils/logger.js'

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
            createdAt,
            excludeId
        } = filters
        // console.log(filters)

        const skip = (page - 1) * limit

        const whereConditions = []
        let newFavorite = favorite
        if(typeof favorite === 'string') newFavorite = favorite === 'true'

        if (status !== undefined) whereConditions.push(eq(blog.status, status))
        if (categoryId !== undefined) {
            whereConditions.push(eq(blog.categoryId, categoryId))
        }
           if (excludeId !== undefined) {
            whereConditions.push(ne(blog.id, excludeId)) // exclude ID tertentu
        }
        if (favorite !== undefined)
            whereConditions.push(eq(blog.favorite, newFavorite))

        if (search) {
            const keyword = `%${search.toLowerCase()}%`

            const searchFilters = [
                like(blog.title, keyword),
                like(blog.content, keyword),
                like(blog.status, keyword),
            ]

            whereConditions.push(or(...searchFilters))
        }

        if (createdAt) {
            let dateFrom;
            const now = dayjs();

            switch (createdAt) {
                case 'today':
                    dateFrom = now.startOf('day').toDate();
                    break;
                case 'this_week':
                    dateFrom = now.startOf('week').toDate();
                    break;
                case 'this_month':
                    dateFrom = now.startOf('month').toDate();
                    break;
                default:
                    dateFrom = null;
            }

            if (dateFrom) {
                whereConditions.push(gte(blog.createdAt, dateFrom));
            }
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
        // console.log({ datas, total, totalPages })
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
        let blog = await findBlogById(id) 
        if(!blog) blog = await findBlogBySlug(id)
        if(!blog) throw new Error('Blog not found')
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
            
        await insertBlog({ ...payload, slug, favorite: false })
    } catch (error) {
        throw new Error(error.message)
    }
}

export const deleteBlogById = async (id) => {
    try {
        const blog = await findBlogById(id)
        if (blog == null) {
            throw new Error('Blog with that ID not found')
        }
        const imagePath = path.join(__dirname, '../../upload', blog.image)
        if (fs.existsSync(imagePath)) {
            fs.unlinkSync(imagePath)
        }

     
        try {
            const pdfPath = path.join(__dirname, '../../upload', blog.pdf);
            if (fs.existsSync(pdfPath)) {
                fs.unlinkSync(pdfPath);
            }  
        } catch (error) {
            
        }
       
        await deleteBlog(id)
    } catch (error) {
        throw new Error(error.message)
    }
}

export const updateQueue = async (id, payload) => {
    try {
        const blog = await findBlogById(id)
        if (!blog) {
            throw new Error('Blog not found')
        }

        const {pdf,image, favorite } = payload
        if (image) {
            const imagePath = path.join(__dirname, '../../upload', blog.image)
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath)
            }
        }
      
        if (pdf) {
            const pdfPath = path.join(__dirname, '../../upload', blog.pdf);
            if (fs.existsSync(pdfPath)) {
                fs.unlinkSync(pdfPath);
            }
        }
        // console.log(payload)
        let newFavorite = favorite

        if (typeof favorite === 'string') {
            newFavorite = favorite === 'true'
        }
        // console.log({newFavorite});

        const totalBlogFavorite = await checkBlogFavorite()
        
        if (blog.status !== 'Published' && newFavorite === true) {
            throw new Error('Blog must be published first')
        }
        if (newFavorite === true && totalBlogFavorite >= 3 && blog.favorite === false) {
            throw new Error('You can only favorite up to 3 blogs')
        }
        await editQueue(id, { ...payload, favorite: newFavorite })
    } catch (error) {
        throw new Error(error.message)
    }
}
