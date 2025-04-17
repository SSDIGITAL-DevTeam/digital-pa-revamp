'use client'

import CustomPhoneInput from '@/components/partials/PhoneInput/CustomPhoneInput'
import { failToast, successToast } from '@/config/toastConfig'
import { axiosInstance } from '@/lib/axios'
import { Button, Input, Textarea, Select, SelectItem } from '@nextui-org/react'
import { FormEvent, JSX, useState } from 'react'
import { toast } from 'sonner'

const businessCategories = [
    'Automotive',
    'Business Support & Supplies',
    'Computers & Electronics',
    'Construction & Contractors',
    'Education',
    'Entertainment',
    'Food & Dining',
    'Health & Medicine',
    'Home & Garden',
    'Legal & Financial',
    'Manufacturing, Wholesale, Distribution',
    'Merchants (Retail)',
    'Miscellaneous',
    'Personal Care & Services',
    'Real Estate',
    'Travel & Transportation',
]

type ErrorMessage = {
    message: string
    errors: {
        name: string[]
        email: string[]
        phone: string[]
        business_category: string[]
        message: string[]
    }
}

export default function ContactForm(): JSX.Element {
    // states
    const [isSending, setIsSending] = useState<boolean>(false)
    const [errorMessages, setErrorMessages] = useState<ErrorMessage>(
        {} as ErrorMessage,
    )
    const [phone, setPhone] = useState<string>('+65')

    // for handling form contact
    async function handleFormContact(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()

        setIsSending(true)

        const form = e.currentTarget as HTMLFormElement & {
            name: HTMLInputElement
            email: HTMLInputElement
            business_category: HTMLSelectElement
            message: HTMLTextAreaElement
        }
        
        const formData = {
            name: form.name.value,
            email: form.email.value,
            phone: `+${phone.replaceAll('+', '')}`,
            business: form.business_category.value,
            message: form.message.value,
            from : "contact"
        }
        try {
            const res = await axiosInstance.post("/lead", formData);

            if (res.status !== 201) {
                setErrorMessages(res.data.error as ErrorMessage)

                toast.error('Opps, Something went wrong.', failToast)

                return
            }

            const formReset = e.target as HTMLFormElement
            formReset.reset()

            setPhone('+65')
            setErrorMessages({} as ErrorMessage)

            toast.success(
                'Your message has been sent.',
                successToast,
            )
        } catch (error) {
            setErrorMessages(error as ErrorMessage)
        } finally {
            setIsSending(false)
        }
    }

    return (
        <form onSubmit={handleFormContact}>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8'>
                <Input
                    classNames={{
                        inputWrapper: 'border shadow-none',
                    }}
                    name='name'
                    variant='bordered'
                    radius='sm'
                    size='lg'
                    placeholder='Your name...'
                    label='Name'
                    labelPlacement='outside'
                    isRequired
                    isInvalid={!!errorMessages?.errors?.name}
                    errorMessage={
                        errorMessages?.errors?.name &&
                        errorMessages.errors.name[0]
                    }
                />

                <Input
                    classNames={{
                        inputWrapper: 'border shadow-none',
                    }}
                    name='email'
                    variant='bordered'
                    radius='sm'
                    type='email'
                    size='lg'
                    placeholder='Your email...'
                    label='Email Address'
                    labelPlacement='outside'
                    isRequired
                    isInvalid={!!errorMessages?.errors?.email}
                    errorMessage={
                        errorMessages?.errors?.email &&
                        errorMessages.errors.email[0]
                    }
                />

                <div className='space-y-1.5'>
                    <label
                        className={`${errorMessages?.errors?.phone ? 'text-[#F31663]' : ''}`}
                        htmlFor='phone'
                    >
                        Phone Number
                    </label>

                    <CustomPhoneInput
                        phone={phone}
                        setPhone={setPhone}
                        error={
                            errorMessages?.errors?.phone &&
                            errorMessages.errors.phone[0]
                        }
                    />
                </div>

                <Select
                    classNames={{
                        trigger: 'border shadow-none',
                    }}
                    name='business_category'
                    label='Business Category'
                    labelPlacement='outside'
                    placeholder='Your business...'
                    variant='bordered'
                    size='lg'
                    isRequired
                    radius='sm'
                    isInvalid={!!errorMessages?.errors?.business_category}
                    errorMessage={
                        errorMessages?.errors?.business_category &&
                        errorMessages.errors.business_category[0]
                    }
                >
                    {businessCategories.map((item: string) => (
                        <SelectItem key={item} value={item}>
                            {item}
                        </SelectItem>
                    ))}
                </Select>

                <div className='space-y-1.5 md:col-span-2'>
                    <label htmlFor='message'>Message</label>

                    <Textarea
                        classNames={{
                            inputWrapper: 'border shadow-none',
                        }}
                        name='message'
                        variant='bordered'
                        radius='sm'
                        isRequired
                        size='lg'
                        placeholder='Your message...'
                        isInvalid={!!errorMessages?.errors?.message}
                        errorMessage={
                            errorMessages?.errors?.message &&
                            errorMessages.errors.message[0]
                        }
                    />
                </div>
            </div>

            <Button
                className='mt-8 font-semibold uppercase'
                type='submit'
                color='primary'
                size='lg'
                radius='sm'
                isLoading={isSending}
            >
                Submit
            </Button>
        </form>
    )
}
