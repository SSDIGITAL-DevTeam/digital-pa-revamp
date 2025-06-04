
import dayjs from 'dayjs'
import 'dayjs/locale/id.js'

dayjs.locale('id')

import { sendFreeDemo } from '../../utils/sendMail.js'
import logger from '../../utils/logger.js'


async function verifyRecaptchaToken(token) {
    const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY
    const url = 'https://www.google.com/recaptcha/api/siteverify'
    const params = new URLSearchParams()
    params.append('secret', RECAPTCHA_SECRET_KEY)
    params.append('response', token)

    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params,
    })

    const data = await response.json()
    logger.info(data)
    if (!data.success || data.score < 0.5) {
        throw new Error('Failed reCAPTCHA check or low score')
    }

    return data
}

export const createDemo = async (payload) => {
    try {
        await verifyRecaptchaToken(payload.token)
        await sendFreeDemo(payload)
    } catch (error) {
        throw new Error(error.message)
    }
}
