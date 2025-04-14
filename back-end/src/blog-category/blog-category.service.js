import { and, asc, desc, eq, like, or } from 'drizzle-orm'
import {
    findAllBlogCats,
    findBlogCatByTitle,
    findBlogCatById,
    insertBlogCat,
    deleteBlogCat,
    editBlogCat,
    findBlogCatBySlug,
} from './blog-category.repository.js'
import { blogCategory } from '../../drizzle/schema.js'

export const getAllBlogCat = async (filters) => {
    // try {
    //   const { page, limit, status, search, orderBy } = filters;
    //   const skip = (page - 1) * limit;
    //   const where = {
    //     AND: [
    //       ...(status ? [{ status }] : []),
    //       {
    //         OR: [
    //           { name: { contains: search } },
    //           ...(search && ["Draft", "Active", "NonActive"].includes(search) ? [{ status: search }] : []),
    //         ],
    //       },
    //     ],
    //   };

    //   const {datas, total} = await findAllBlogCats(skip, limit, where, orderBy);

    //   const totalPages = Math.ceil(total / limit);
    //   return {
    //     data: datas,
    //     pagination: {
    //       total,
    //       totalPages,
    //       currentPage: page,
    //       perPage: limit,
    //     },
    //   };

    // } catch (error) {
    //   throw new Error("Gagal Mengambil Seluruh Data Blog Category");
    // }
    try {
        let { page = 1, limit = 10, status, search, orderBy } = filters

        // page = Math.max(parseInt(page) || 1, 1)
        limit = Math.max(parseInt(limit) || 10, 1)
        const skip = (page - 1) * limit

        // let orderByParams = [];
        // if (orderBy) {
        //     orderByParams = orderBy.split(",").map(order => {
        //         const [field, direction] = order.split(":");
        //         return { [field]: direction === "desc" ? "desc" : "asc" };
        //     });
        // }

        const whereConditions = []

        if (status !== undefined)
            whereConditions.push(
                eq(
                    blogCategory.status,
                    typeof status === 'boolean' ? status : status === 'true'
                )
            )
        if (search) {
            const keyword = `%${search.toLowerCase()}%`
            const searchFilters = [
                like(blogCategory.name, keyword),
                like(blogCategory.status, keyword),
            ]
            whereConditions.push(or(...searchFilters))
        }

        const where = whereConditions.length
            ? and(...whereConditions)
            : undefined

        const order = (orderBy || []).map((item) => {
            const field = Object.keys(item)[0]
            const direction = item[field]
            return direction === 'desc'
                ? desc(blogCategory[field])
                : asc(blogCategory[field])
        })

        const { datas, total } = await findAllBlogCats(
            skip,
            limit,
            where,
            order
        )

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
        console.log(error)
        throw new Error(error)
    }
}

export const getBlogCatByTitle = async (name) => {
    try {
        const data =
            (await findBlogCatByTitle(name)) || (await findBlogCatBySlug(name))
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}

export const getBlogCatById = async (id, filters) => {
    try {
        const { status } = filters
        const whereConditions = []

        if (status !== undefined)
            whereConditions.push(
                eq(
                    blogCategory.status,
                    typeof status === 'boolean' ? status : status === 'true'
                )
            )

        whereConditions.push(
            or(eq(blogCategory.id, id), eq(blogCategory.slug, id))
        )

        const where = whereConditions.length
            ? and(...whereConditions)
            : undefined

        let data =
            (await findBlogCatById(where)) || (await findBlogCatBySlug(where))
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}

export const createBlogCat = async (payload) => {
    try {
        // const checkName = await getBlogCatByTitle(payload.name);
        // if (checkName) {
        //   throw new Error("Blog Category dengan nama tersebut sudah ada");
        // }
        const slug = payload.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
        const data = await insertBlogCat({ ...payload, slug })
        return data
    } catch (error) {
        throw new Error(error.message)
    }
}

export const deleteBlogCatById = async (id) => {
    try {
        await findBlogCatById(id)
        await deleteBlogCat(id)
    } catch (error) {
        throw new Error(error.message)
    }
}

export const updateBlogCat = async (id, payload) => {
    try {
        const data = await findBlogCatById(id)
        if (!data) {
            throw new Error('Blog Category dengan Id tersebut tidak ditemukan')
        }
        const newSlug = payload.name
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '')
        await editBlogCat(id, { ...payload, slug: newSlug })
    } catch (error) {
        throw new Error(error.message)
    }
}
