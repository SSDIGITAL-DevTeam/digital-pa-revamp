import { count, eq,sql } from 'drizzle-orm'
import { db } from '../../drizzle/db.js'
import { blog, blogCategory } from '../../drizzle/schema.js'

export const findAllBlogCats = async (skip, limit, where, orderBy) => {
    try {
        // ambil data kategori + hitung jumlah blog
        let baseQuery = db
            .select({
                id: blogCategory.id,
                name: blogCategory.name,
                slug: blogCategory.slug,
                status: blogCategory.status,
                countBlog: count(blog.id).mapWith(Number), // jumlah blog per kategori
            })
            .from(blogCategory)
            .leftJoin(blog, eq(blog.categoryId, blogCategory.id)) // asumsi relasi blog.categoryId
            .groupBy(blogCategory.id);

        if (where) baseQuery = baseQuery.where(where);
        if (orderBy) baseQuery = baseQuery.orderBy(...orderBy);

        const datas = await baseQuery.limit(limit).offset(skip);

        // hitung total kategori (bukan total blog)
        const totalQuery = db.select({ count: count() }).from(blogCategory);
        if (where) totalQuery.where(where);

        const [{ count: total }] = await totalQuery;

        return { datas, total };
    } catch (error) {
        throw new Error("Get all blog categories unsuccessfully");
    }
};

export const findBlogCatByName = async (name) => {
    try {
        const data = await db.query.blogCategory.findFirst({
            where: eq(blogCategory.name, name),
        })
        return data
    } catch (error) {
        throw new Error('Get blog category by name unsuccessfully')
    }
}

export const findBlogCatById = async (where) => {
    try {
        const data = await db.query.blogCategory.findFirst({
            where,
            with: {
                blogs: {
                    columns: {
                        id: true,
                        title: true,
                        slug: true,
                        favorite: true,
                        status: true,
                        userId: true,
                    },
                },
            },
        })

        return data
    } catch (error) {
        throw new Error('Get blog category by id unsuccessfully')
    }
}

export const insertBlogCat = async (data) => {
    try {
        await db.insert(blogCategory).values(data)
    } catch (error) {
        throw new Error('Insert blog category unsuccessfully')
    }
}

export const deleteBlogCat = async (id) => {
    try {
        await db.delete(blogCategory).where(eq(blogCategory.id, id))
    } catch (error) {
        throw new Error('Delete blog category unsuccessfully')
    }
}

export const editBlogCat = async (id, data) => {
    try {
        await db.update(blogCategory).set(data).where(eq(blogCategory.id, id))
    } catch (error) {
        throw new Error('Change blog category unsuccessfully')
    }
}
