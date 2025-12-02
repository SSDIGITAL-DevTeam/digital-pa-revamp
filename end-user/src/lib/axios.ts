import axios from "axios"

export const axiosInstance = axios.create({
    baseURL: '/api',
    headers: {
        Accept: 'application/json',
    },
})