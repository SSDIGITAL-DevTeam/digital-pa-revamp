import Higer from '@/assets/our-services/webp/logo-higer.webp'
import BikeChoice from '@/assets/our-services/webp/logo-bikechoice.webp'
import CarChoice from '@/assets/our-services/webp/logo-carchoice.webp'
import HealingLoftFull from '@/assets/our-services/webp/logo-healingloft.webp'
import MotorCheckup from '@/assets/our-services/webp/logo-motorcheckup.webp'
import Suma from '@/assets/our-services/webp/logo-suma.webp'
import Sun from '@/assets/our-services/webp/logo-sun.webp'
import WinPhuket from '@/assets/our-services/webp/logo-winphuket.webp'

import Image from 'next/image'
import Header from './Header'

const listClients = [BikeChoice.src, Sun.src, HealingLoftFull.src, Higer.src, CarChoice.src, Suma.src, WinPhuket.src, MotorCheckup.src]

export default function OurBrands() {
    return (
        <div className="lg:max-w-7xl w-full flex flex-col gap-10 lg:gap-16 lg:mx-auto px-5">
            <Header title='our brand partners' />
            <div className="flex flex-wrap gap-x-8 gap-y-8 justify-center items-end lg:max-w-4xl lg:mx-auto ">
                <Image src={listClients[0]} alt={`${listClients[0]} logo`} width={1920} height={1080} className="object-contain h-10 w-fit" />
                <Image src={listClients[1]} alt={`${listClients[1]} logo`} width={1920} height={1080} className="object-contain h-20 w-fit" />
                <Image src={listClients[2]} alt={`${listClients[2]} logo`} width={1920} height={1080} className="object-contain h-12 w-fit" />
                <Image src={listClients[3]} alt={`${listClients[3]} logo`} width={1920} height={1080} className="object-contain h-9 mb-1 w-fit" />
                <Image src={listClients[4]} alt={`${listClients[4]} logo`} width={1920} height={1080} className="object-contain h-16 w-fit" />
                <Image src={listClients[5]} alt={`${listClients[5]} logo`} width={1920} height={1080} className="object-contain h-9 w-fit" />
                <Image src={listClients[6]} alt={`${listClients[6]} logo`} width={1920} height={1080} className="object-contain h-9 mb-1 w-fit" />
                <Image src={listClients[7]} alt={`${listClients[7]} logo`} width={1920} height={1080} className="object-contain h-12 w-fit" />
                <div className="flex w-full justify-center items-center mt-4">
                    <p className="font-bold">and many more</p>
                </div>
            </div>
        </div>
    )
}