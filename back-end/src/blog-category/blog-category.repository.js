import { count, eq } from "drizzle-orm";
import { db } from "../../drizzle/db.js";
import { blog, blogCategory } from "../../drizzle/schema.js";
import prisma from "../../lib/prisma.js";

export const findAllBlogCats = async (skip, limit, where, orderBy) => {
    try {
            let baseQuery = db
                .select({
                    blogCategory,
                })
                .from(blogCategory)
                // .leftJoin(blogCategory, eq(blog.categoryId, blogCategory.id))
                // .leftJoin(user, eq(blog.userId, user.id))
    
            if (where) baseQuery = baseQuery.where(where)
            if (orderBy) baseQuery = baseQuery.orderBy(...orderBy)
    
            const datas = await baseQuery.limit(limit).offset(skip)
    
            const totalQuery = db
                .select({ count: count() })
                .from(blogCategory)
                // .leftJoin(blogCategory, eq(blog.categoryId, blogCategory.id))
                // .leftJoin(user, eq(blog.userId, user.id))
    
            if (where) totalQuery.where(where)
    
            const [{ count: total }] = await totalQuery
    
            return { datas, total }
        } catch (error) {
            console.log('GET / error: ', error)
            throw new Error('Error fetching all blog categories')
        }
    // try {
    //     const datas = await prisma.blogCategory.findMany({
    //         skip,
    //         take: limit,
    //         where,
    //         orderBy,
    //     });
    //     const total = await prisma.blogCategory.count({ where });
    //     return { datas, total };
    // } catch (error) {
    //     console.log(error);
    //     throw new Error("Kesalahan mengambil seluruh data blog category");
    // }
};

export const findBlogCatByTitle = async (name) => {
    try {
        const data = await prisma.blogCategory.findUnique({
            where: { name }
        });
        return data;
    } catch (error) {
        console.log(error)
        throw new Error("Kesalahan mengambil data berdasarkan nama");
    }
}

export const findBlogCatById = async (where) => {
    // try {
    //     const data = await prisma.blogCategory.findUnique({
    //         where: { id },
    //         include:{
    //             blogs:true
    //         }
    //     });
    //     return data;
    // } catch (error) {
    //     console.error("Error fetching Category by ID:", error);
    //     throw new Error("Kesalahan mengambil data berdasarkan ID");
    // }

    try {
        let baseQuery = db
            .select({
                blogCategory,
                blog
            })
            .from(blogCategory)
            .leftJoin(blog, eq(blog.categoryId, blogCategory.id))
            // .leftJoin(user, eq(blog.userId, user.id))

        if (where) baseQuery = baseQuery.where(where)
        // if (orderBy) baseQuery = baseQuery.orderBy(...orderBy)

        const datas = await baseQuery
        // .limit(limit).offset(skip)

        // const totalQuery = db
        //     .select({ count: count() })
        //     .from(blogCategory)
        //     // .leftJoin(blogCategory, eq(blog.categoryId, blogCategory.id))
        //     // .leftJoin(user, eq(blog.userId, user.id))

        // if (where) totalQuery.where(where)

        // const [{ count: total }] = await totalQuery

        // return { datas, total }
        return datas
    } catch (error) {
        console.log('GET / error: ', error)
        throw new Error('Error fetching all blog categories')
    }
};

export const findBlogCatBySlug = async (where) => {
    try {
        let baseQuery = db
            .select({
                blogCategory,
                blog
            })
            .from(blogCategory)
            .leftJoin(blog, eq(blog.categoryId, blogCategory.id))
            // .leftJoin(user, eq(blog.userId, user.id))

        if (where) baseQuery = baseQuery.where(where)
        // if (orderBy) baseQuery = baseQuery.orderBy(...orderBy)

        const datas = await baseQuery
        // .limit(limit).offset(skip)

        // const totalQuery = db
        //     .select({ count: count() })
        //     .from(blogCategory)
        //     // .leftJoin(blogCategory, eq(blog.categoryId, blogCategory.id))
        //     // .leftJoin(user, eq(blog.userId, user.id))

        // if (where) totalQuery.where(where)

        // const [{ count: total }] = await totalQuery

        // return { datas, total }
        return datas
    } catch (error) {
        console.log('GET / error: ', error)
        throw new Error('Error fetching all blog categories')
    }
};


export const insertBlogCat = async (data) => {
    try {
        console.log("insertBlogCat data: ", data);
        await db.insert(blogCategory).values(data);
    } catch (error) {
        console.error('POST / error: ',error)
        throw new Error("Error inserting blog category");
    }
};

export const deleteBlogCat = async (id) => {
    try {
        await prisma.blogCategory.delete({
            where: { id },
        });
    } catch (error) {
        console.log(error)
        throw new Error("Kesalahan dalam penghapusan Blog category");
    }
};

export const editBlogCat = async (id, data) => {
    try {
        await prisma.blogCategory.update({
            where: { id },
            data
        });
    } catch (error) {
        console.log(error)
        throw new Error("Kesalahan dalam mengubah Blog category");
    }
};