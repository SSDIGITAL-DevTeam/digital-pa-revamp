//berkomunikasi dengan database
//dapat menggunakan orm atau query raw
//supaya untuk mengganti ORM tinggal ganti pada file ini aja kok

import { db } from '../../drizzle/db.js'
import { blog, blogCategory, user } from '../../drizzle/schema.js'
import { eq, count } from 'drizzle-orm'
import logger from '../../utils/logger.js'

export const findAllBlogs = async (skip, limit, where, orderBy) => {
    try {
        let datas = await db.query.blog.findMany({
            with: {
                category: {
                    columns: {
                        id: true,
                        name: true,
                        slug: true,
                        status: true
                    }
                },
                author: {
                    columns: {
                        id: true,
                        name: true,
                    }
                },
            },
            where,
            limit,
            offset : skip,
            orderBy
        })

        const totalQuery = db
            .select({ count: count() })
            .from(blog)
            .leftJoin(blogCategory, eq(blog.categoryId, blogCategory.id))
            .leftJoin(user, eq(blog.userId, user.id))

        if (where) totalQuery.where(where)

        const [{ count: total }] = await totalQuery

        return { datas, total }
    } catch (error) {
        // logger.error('GET / error: Get all blogs unsuccessfully')
        throw new Error('Get all blogs unsuccessfully')
    }
}
export const checkBlogFavorite = async () => {
    try {
        const totalFavorite = db
            .select({ count: count() })
            .from(blog)
            .where(eq(blog.favorite, true))

        const [{ count: total }] = await totalFavorite

        return total
    } catch (error) {
        // logger.error('GET / error: Get favorite blogs unsuccessfully')
        throw new Error('Get favorite blogs unsuccessfully')
    }
}

export const findBlogById = async (blogId) => {
    try {
        let data = await db.query.blog.findFirst({
            with: {
                category: {
                    columns: {
                        id: true,
                        name: true,
                        slug: true,
                        status: true
                    }
                },
                author: {
                    columns: {
                        id: true,
                        name: true,
                    }
                },
            },
            where : eq(blog.id, blogId)
        })

        return data
    } catch (error) {
        // logger.error(`GET by ID / error: Get blog by ID unsuccessfully`)
        throw new Error('Get blog by ID unsuccessfully`)')
    }
}
export const findBlogBySlug = async (slug) => {
    try {
        let data = await db.query.blog.findFirst({
            with: {
                category: {
                    columns: {
                        id: true,
                        name: true,
                        slug: true,
                        status: true
                    }
                },
                author: {
                    columns: {
                        id: true,
                        name: true,
                    }
                },
            },
            where : eq(blog.slug, slug)
        })

        return data
    } catch (error) {
        // logger.error('GET by ID / error: Get blog by slug unsuccessfully')
        throw new Error('Get blog by slug unsuccessfully')
    }
}

export const findBlogByTitle = async (title) => {
    try {
        const result = await db
            .select()
            .from(blog)
            .where(eq(blog.title, title))
            .limit(1)

        return result[0] || null
    } catch (error) {
        // logger.error('GET by Title / error: Get blog by title unsuccessfully')
        throw new Error('Get blog by title unsuccessfully')
    }
}

export const insertBlog = async (data) => {
    try {
        // console.log("=============masuk data ",data)
        await db.insert(blog).values(data)
        // console.log("=============pasti gak masuk")
    } catch (error) {
        // console.log("============= apasih erornya ",error)
        // logger.error('POST / error: Insert blog unsuccessfully')
        throw new Error('Insert blog unsuccessfully')
    }
}

export const deleteBlog = async (id) => {
    try {
        await db.delete(blog).where(eq(blog.id, id))
    } catch (error) {
        // logger.error('DELETE / error: Blog delete unsuccessfully')
        throw new Error('Blog delete unsuccessfully')
    }
}

export const editQueue = async (id, data) => {
    try {
        await db.update(blog).set(data).where(eq(blog.id, id))
    } catch (error) {
        // logger.error('UPDATE / error: Blog edit unsuccessfully')
        throw new Error('Blog edit unsuccessfully')
    }
}
