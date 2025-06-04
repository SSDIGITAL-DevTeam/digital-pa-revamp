"use client"
import { JSX } from 'react'
import Link from 'next/link'
import { EnvelopeIcon } from '@heroicons/react/16/solid'
import { NavLink, navlinks } from '@/constants/navlink'
// import AssetFacebookIcon from '@/assets/footer/svg/asset-facebook-icon.svg'
// import AssetInstagramIcon from '@/assets/footer/svg/asset-instagram-icon.svg'
// import AssetTwitterIcon from '@/assets/footer/svg/asset-twitter-icon.svg'
// import { Image } from '@nextui-org/react'
import Logo from '@/components/partials/Logo'
import { FooterPopover } from '@/components/partials/Popover/FooterPopover'
import { usePathname } from 'next/navigation'

export default function Footer(): JSX.Element {

    const pathname = usePathname()

    let isHidden = false
    if (pathname === "/dpa-leads-ai-automation"
        || pathname === "/isun-chatbot-ai-testing"
        || pathname === "/demo-dpa-tuition-agency") {
        isHidden = true
    }

    return (
        <footer className={`border-t bg-white ${isHidden ? "hidden" : ""}`} >
            <div className='container p-10 md:p-8'>
                <div className='grid grid-cols-1 gap-8 py-4 sm:grid-cols-2 md:grid-cols-4 md:justify-items-center lg:grid-cols-4'>
                    <div className='space-y-4'>
                        <Link href='/'>
                            <Logo className='w-56' />
                        </Link>

                        <p>
                            <strong>
                                Think of us as your Digital Partner —
                            </strong>{' '}
                            simplifying marketing, automation, and growth for your business.
                        </p>
                    </div>

                    {/* contact wrapper */}
                    <div>
                        <p className='font-heading text-lg font-semibold'>
                            Contact Info
                        </p>

                        <div className='mt-2.5 space-y-2'>
                            <a
                                className='flex items-center gap-2 duration-150 hover:translate-x-1'
                                href='mailto:wow@digital-pa.com.sg'
                            >
                                <EnvelopeIcon className='h-5 w-5' />

                                <span>wow@digital-pa.com.sg</span>
                            </a>

                            {/* hidden phone at the moment */}
                            {/* <a
                                className='flex items-center gap-2 duration-150 hover:translate-x-1'
                                href='tel:+65 1234 5678'
                            >
                                <PhoneIcon className='h-5 w-5' />

                                <span>+65 1234 5678</span>
                            </a> */}
                        </div>
                    </div>

                    {/* location wrapper */}
                    <div>
                        <p className='font-heading text-lg font-semibold'>
                            Location
                        </p>

                        <a
                            href='https://maps.app.goo.gl/MpvSR2mATADEUe2y8'
                            target='_blank'
                        >
                            <address className='mt-2.5 w-3/4 not-italic md:w-full'>
                                1100 Lower Delta Rd #02-02B EPL Building
                                Singapore 169206
                            </address>
                        </a>

                    </div>

                    {/* links wrapper */}
                    <div>
                        <p className='font-heading text-lg font-semibold'>
                            Links
                        </p>

                        <ul className='mt-2.5 space-y-2 '>
                            {navlinks.map((navlink: NavLink, index: number) => {
                                return (
                                    <li
                                        className='duration-150 hover:translate-x-1 hover:font-semibold'
                                        key={`footer-link-${index}`}
                                    >
                                        {(navlink.menus) ?
                                            <FooterPopover name={navlink.name} menus={navlink.menus || []} />
                                            :
                                            <Link className='block' href={navlink.path}>
                                                {navlink.name}
                                            </Link>
                                        }
                                    </li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* social media wrapper (hidden at the moment)*/}
                    {/* <div>
                        <p className='font-heading text-lg font-semibold'>
                            Follow Us
                        </p>

                        <ul className='mt-2.5 flex gap-2.5'>
                            <li>
                                <a
                                    href='http://www.facebook.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Image
                                        className='h-5 w-5'
                                        src={AssetFacebookIcon.src}
                                        alt='facebook icon'
                                    />
                                </a>
                            </li>

                            <li>
                                <a
                                    href='http://www.instagram.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Image
                                        className='h-5 w-5'
                                        src={AssetInstagramIcon.src}
                                        alt='facebook icon'
                                    />
                                </a>
                            </li>

                            <li>
                                <a
                                    href='http://www.x.com'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                >
                                    <Image
                                        className='h-5 w-5'
                                        src={AssetTwitterIcon.src}
                                        alt='facebook icon'
                                    />
                                </a>
                            </li>
                        </ul>
                    </div> */}
                </div>

                <hr className='mt-6' />

                {/* copyright wrapper */}
                <div className='pt-4'>
                    <p className='text-center md:text-left'>
                        © {new Date().getFullYear()} Digital-PA. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
