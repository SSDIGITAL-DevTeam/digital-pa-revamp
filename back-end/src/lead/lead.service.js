//functionya re-usable

import {
    findAllLeads,
    insertLead,
    findLeadById,
    editLead,
    deleteLead
} from './lead.repository.js'
import dayjs from 'dayjs'
import 'dayjs/locale/id.js'

dayjs.locale('id') // Set locale ke bahasa Indonesia

import { asc, desc, ilike, and, or, eq, like, sql, gte, is } from 'drizzle-orm'
import { blog, blogCategory, lead, user } from '../../drizzle/schema.js'

export const getAllLeads = async (filters) => {
    try {
        const {
            page = 1,
            limit = 10,
            orderBy,
            search,
            createdAt
        } = filters

        const skip = (page - 1) * limit

        const whereConditions = []

        if (search) {
            const keyword = `%${search.toLowerCase()}%`

            const searchFilters = [
                like(lead.name, keyword),
                like(lead.email, keyword),
                like(lead.phone, keyword),
                like(lead.business, keyword),
                like(lead.message, keyword),
                like(lead.from, keyword),
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
                whereConditions.push(gte(lead.createdAt, dateFrom));
            }
        }


        const where = whereConditions.length
            ? and(...whereConditions)
            : undefined

        const order = (orderBy || []).map((item) => {
            const field = Object.keys(item)[0]
            const direction = item[field]
            return direction === 'desc' ? desc(lead[field]) : asc(lead[field])
        })
        const { datas, total } = await findAllLeads(skip, limit, where, order)

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
        console.log(error)
        throw new Error(error.message)
    }
}

export const getLeadById = async (id) => {
    try {
        let where = eq(lead.id, id)
        const leadData = await findLeadById(where)
        if(!leadData) {
            throw new Error('Lead not found')
        }
        return leadData
    } catch (error) {
        throw new Error(error.message)
    }
}

export const createLead = async (payload) => {
    try {
        await insertLead(payload)
    } catch (error) {
        throw new Error(error.message)
    }
}

export const deleteLeadById = async (id) => {
    try {
        let where = eq(lead.id, id)
        const isLeadExist = await findLeadById(where)
        if (!isLeadExist) {
            throw new Error('Lead not found')
        }
        await deleteLead(id)
    } catch (error) {
        throw new Error(error.message)
    }
}

export const updateLead = async (id, payload) => {
    try {
        const where = eq(lead.id, id)
        const isLeadExist = await findLeadById(where)
        if (!isLeadExist) {
            throw new Error('Lead not found')
        }
        await editLead(id, payload)
    } catch (error) {
        throw new Error(error.message)
    }
}
