//berkomunikasi dengan database
//dapat menggunakan orm atau query raw
//supaya untuk mengganti ORM tinggal ganti pada file ini aja kok

import { db } from '../../drizzle/db.js'
import { lead } from '../../drizzle/schema.js'
import { eq, count } from 'drizzle-orm'

export const findAllLeads = async (skip, limit, where, orderBy) => {
    try {
        let baseQuery = db.select(lead).from(lead)

        if (where) baseQuery = baseQuery.where(where)
        if (orderBy) baseQuery = baseQuery.orderBy(...orderBy)

        const datas = await baseQuery.limit(limit).offset(skip)

        const totalQuery = db.select({ count: count() }).from(lead)

        if (where) totalQuery.where(where)

        const [{ count: total }] = await totalQuery

        return { datas, total }
    } catch (error) {
        console.log('GET / error: ', error)
        throw new Error('Get all leads unsuccessfully')
    }
}

export const findLeadById = async (where) => {
    try {
        const data = await db.query.lead.findFirst({
            where,
        })
        return data
    } catch (error) {
        console.error('GET by ID / error: ', error)
        throw new Error('Get lead by ID unsuccessfully')
    }
}

export const insertLead = async (data) => {
    try {
        await db.insert(lead).values(data)
    } catch (error) {
        console.error('POST / error: ', error)
        throw new Error('Lead insert unsuccessfully')
    }
}

export const deleteLead = async (id) => {
    try {
        await db.delete(lead).where(eq(lead.id, id))
    } catch (error) {
        console.error('DELETE / error: ', error)
        throw new Error('Lead delete unsuccessfully')
    }
}

export const editLead = async (id, data) => {
    try {
        await db.update(lead).set(data).where(eq(lead.id, id))
    } catch (error) {
        console.log('UPDATE / error: ', error)
        throw new Error('Lead edit unsuccessfully')
    }
}
