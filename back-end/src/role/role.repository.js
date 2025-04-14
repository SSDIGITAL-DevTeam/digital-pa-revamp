//berkomunikasi dengan database
//dapat menggunakan orm atau query raw
//supaya untuk mengganti ORM tinggal ganti pada file ini aja kok

import { db } from "../../drizzle/db.js";
import { user } from "../../drizzle/schema.js";
import prisma from "../../lib/prisma.js";

export const findAllUsers = async (skip, limit, where, orderBy) => {
    try {
        const datas = await prisma.user.findMany({
            skip,
            take: limit,
            where,
            orderBy,
            select: {
                id: true,
                name: true,
                email: true,
                status:true,
				role:true,
				features :true
            }
        });
        const total = await prisma.user.count({ where });
        return { datas, total };
    } catch (error) {
        console.log(error)
        throw new Error("Kesalahan mengambil semua role");
    }
}

export const findUserById = async (id) => {
    try {
        const user = await prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                name: true,
                email: true,
				password:true,
                status:true,
				role:true,
				features :true
            }
        });
        return user;
    } catch (error) {
        console.log(error)
        throw new Error("Kesalahan pencarian role berdasarkan id");
    }
}

export const findUserByEmail = async (email) => {
    try {
        const user = await prisma.user.findFirst({
            where: { email },
            select: {
                id: true,
                name: true,
                password: true,
                email: true,
				role:true,
                features :true
            }
        });
        return user;
    } catch (error) {
        console.log(error)
        throw new Error("Kesalahan pencarian role berdasarkan email");
    }
}

export const findUserByRefreshToken = async (refreshToken) => {
    try {
        const user = await prisma.role.findFirst({
            where: { refreshToken },
            select: {
                id: true,
                name: true,
                password: true,
                email: true,
				role:true,
                features :true
            }
        });
        return user;
    } catch (error) {
        console.log(error)
        throw new Error("Kesalahan pencarian role berdasarkan token");
    }
}

export const insertUser = async (data) => {
    try {
        await db.insert(user).values(data);
    } catch (error) {
        console.error('POST / error: ',error)
        throw new Error("Error creating user");
    }
};

export const deleteUser = async (id) => {
    try {
        await prisma.role.delete({
            where: { id },
        });
    } catch (error) {
        console.log(error)
        throw new Error("Kesalahan dalam penghapusan role");
    }
};

export const editUser = async (id, data) => {
    try {
        await prisma.role.update({
            where: { id },
            data
        });
    } catch (error) {
        console.log(error)
        throw new Error("Kesalahan dalam mengubah role");
    }
};

