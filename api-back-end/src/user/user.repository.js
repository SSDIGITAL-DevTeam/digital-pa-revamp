//berkomunikasi dengan database
//dapat menggunakan orm atau query raw
//supaya untuk mengganti ORM tinggal ganti pada file ini aja kok

import { count, eq } from 'drizzle-orm'
import { db } from '../../drizzle/db.js'
import { user } from '../../drizzle/schema.js'

export const findAllUsers = async (skip, limit, where, orderBy) => {
    try {
        let baseQuery = db
            .select({
                id: user.id,
                name: user.name,
                email: user.email,
                status: user.status,
                role: user.role,
                features: user.features,
            })
            .from(user)
        if (where) baseQuery = baseQuery.where(where)
        if (orderBy) baseQuery = baseQuery.orderBy(...orderBy)

        const datas = await baseQuery.limit(limit).offset(skip)

        const totalQuery = db.select({ count: count() }).from(user)
        if (where) totalQuery.where(where)

        const [{ count: total }] = await totalQuery

        return { datas, total }
    } catch (error) {
        throw new Error('Get all users unsuccessfully')
    }
}

export const findUserById = async (id) => {
    try {
        const data = db.query.user.findFirst({
            where: eq(user.id, id),
        })
        return data
    } catch (error) {
        throw new Error('Get user by ID unsuccessfully')
    }
}

export const findUserByEmail = async (email) => {
    try {
        const userData = await db.query.user.findFirst({
            where: eq(user.email, email),
        })
        return userData
    } catch (error) {
        throw new Error('Get user by email unsuccessfully')
    }
}

export const findUserByRefreshToken = async (refreshToken) => {
    try {
        const userData = await db.query.user.findFirst({
            where: eq(user.refreshToken, refreshToken),
        })
        return userData
    } catch (error) {
        throw new Error('Get user by refresh token unsuccessfully')
    }
}

export const insertUser = async (data) => {
    try {
        await db.insert(user).values(data)
    } catch (error) {
        throw new Error('Error creating user')
    }
}

export const deleteUser = async (id) => {
    try {
        await db.delete(user).where(eq(user.id, id))
    } catch (error) {
        throw new Error('Error deleting user')
    }
}

export const editUser = async (id, data) => {
    try {
        await db.update(user).set(data).where(eq(user.id, id))
    } catch (error) {
        throw new Error('Edit user unsuccessfully')
    }
}
