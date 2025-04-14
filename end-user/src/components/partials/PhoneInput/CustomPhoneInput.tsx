import { Dispatch, JSX, SetStateAction } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

type Props = {
    error: string | string[] | boolean
    phone: string
    setPhone: Dispatch<SetStateAction<string>>
}

export default function CustomPhoneInput({
    error,
    phone,
    setPhone,
}: Props): JSX.Element {
    return (
        <div>
            <PhoneInput
                inputStyle={{
                    width: '100%',
                    border: error ? '1px solid #F31663' : '1px solid #E4E4E7',
                    borderRadius: '0.5rem',
                    paddingBlock: '1.4rem',
                    backgroundColor: 'transparent',
                    color: '#212529',
                }}
                buttonStyle={{
                    border: error ? '1px solid #F31663' : '1px solid #E4E4E7',
                    borderStartStartRadius: '0.4rem',
                    borderBottomLeftRadius: '0.4rem',
                    paddingBlock: '1.4rem',
                    color: '#212529',
                }}
                value={phone}
                onChange={(phone: string) => setPhone(phone)}
                country={'sg'}
                enableSearch
            />

            {error && <small className='text-xs text-[#F31663]'>{error}</small>}
        </div>
    )
}
