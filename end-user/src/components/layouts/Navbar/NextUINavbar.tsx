'use client'

import {
    Navbar,
    NavbarBrand,
    NavbarMenuToggle,
    NavbarMenuItem,
    NavbarMenu,
    NavbarContent,
    NavbarItem,
    Link,
    Button,
    Dropdown,
    DropdownMenu,
    DropdownTrigger,
    DropdownItem,
} from '@nextui-org/react'
import { NavLink, navlinks } from '@/constants/navlink'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import Logo from '@/components/partials/Logo'
import { ChevronDown, Sparkles } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
// import { useFooterStore } from '@/store/navbarStore'

export default function NextUINavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const pathname = usePathname()

    let isHidden = false
    if (pathname === "/marketing-automation" 
        || pathname === "/isun-chatbot-ai-testing"
        || pathname === "/demo-dpa-tuition-agency") {
        isHidden = true
    }
    // const setIsOpenNavbar = useFooterStore((state) => state.updateNavbar)
    // const isOpenNavbar = useFooterStore((state) => state.isNavbarOpen)

    // const setIsOpenService = useFooterStore((state) => state.updateService)
    // const isOpenService = useFooterStore((state) => state.isServiceOpen)

    return (
        <Navbar
            className={`z-[102] w-full bg-white px-0 py-2 md:py-4 lg:px-20 ${isHidden ? "hidden" : ""}`}
            maxWidth='full'
            // isMenuOpen={isOpenNavbar}
            // onMenuOpenChange={setIsOpenNavbar}
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
        >
            <NavbarContent className='' justify='start'>
                <NavbarBrand className='flex justify-start'>
                    <Link href='/'>
                        <Logo />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className='md:hidden' justify='end'>
                <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} />
            </NavbarContent>
            {/* Desktop Menu */}
            <NavbarContent
                className='hidden gap-4 lg:gap-8 md:flex'
                justify='center'
            >
                {navlinks.slice(0, 4).map((navlink: NavLink, index: number) => {
                    if (navlink.menus)
                        return (
                            <Dropdown key={`navlink-${index}`}>
                                <NavbarItem>
                                    <DropdownTrigger className='bg-white p-1 m-0 w-fit h-fit'>
                                        <Button
                                            endContent={<ChevronDown />}
                                            className={`${pathname.startsWith(navlink.path) ? 'text-primary' : 'text-dark'} text-lg lg:text-xl font-semibold`}
                                        >
                                            Services
                                        </Button>
                                    </DropdownTrigger>
                                </NavbarItem>
                                <DropdownMenu aria-label="Menu" itemClasses={{ base: "p-4" }}>
                                    <DropdownItem
                                        isReadOnly
                                        className="w-full p-0"
                                    >
                                        <div className="columns-2 gap-8 min-w-[35vw] p-3">
                                            {navlink.menus?.map((menu, idx) => (
                                                <ul key={idx} className="flex flex-col gap-3 p-4">
                                                    <li>
                                                        {menu.name === "AI Solutions" ? (
                                                            <span className="font-bold text-lg text-primary flex items-center gap-2">
                                                                AI Solutions <Sparkles size={20} fill="red" />
                                                            </span>
                                                        ) : (
                                                            <span className="font-bold text-lg text-primary">{menu.name}</span>
                                                        )}
                                                    </li>
                                                    {menu.submenu.map((submenu, subIdx) => (
                                                        <li key={subIdx}>
                                                            <Link href={submenu.path} className="font-light text-gray-600 cursor-pointer hover:text-primary">
                                                                {submenu.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ))}
                                        </div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        )
                    return (
                        <NavbarItem key={`navlink-${index}`}>
                            <Link
                                className={`${pathname === navlink.path ? 'text-primary' : 'text-dark'} text-lg lg:text-xl font-semibold`}
                                href={navlink.path}
                            >
                                {navlink.name}
                            </Link>
                        </NavbarItem>
                    )
                })}
            </NavbarContent>
            {/* menu */}

            {/* mobile view */}
            {/* <NavbarMenu
                className='mt-8 space-y-3 z-[999]'
            >
                {navlinks.slice(0, 4).map((navlink: NavLink, index: number) => {
                    if (navlink.menus)
                        return (
                            <Dropdown key={`navlink-${index}`} className='w-fit ms-10'>
                                <NavbarMenuItem>
                                    <DropdownTrigger className='bg-transparent p-0 m-0 w-fit h-fit'>
                                        <Button
                                            endContent={<ChevronDown />}
                                            className={`${pathname.startsWith(navlink.path) ? 'text-primary' : 'text-dark'} text-lg font-semibold`}
                                        >
                                            Services
                                        </Button>
                                    </DropdownTrigger>
                                </NavbarMenuItem>
                                <DropdownMenu className="z-[9999]" aria-label="Menu" itemClasses={{ base: "p-0" }}>
                                    <DropdownItem isReadOnly className="p-0">
                                        <div className="max-h-[400px] overflow-y-auto overflow-x-hidden w-full p-3 py-6">
                                            {navlink.menus?.map((menu, idx) => (
                                                <ul key={idx} className="flex flex-col gap-2 p-2">
                                                    <li>
                                                        {menu.name === "AI Solutions" ? (
                                                            <span className="font-bold text-base text-primary flex items-center gap-2">
                                                                AI Solutions <Sparkles size={12} fill="red" />
                                                            </span>
                                                        ) : (
                                                            <span className="font-bold text-base text-primary">{menu.name}</span>
                                                        )}
                                                    </li>
                                                    {menu.submenu.map((submenu, subIdx) => (
                                                        <li key={subIdx}>
                                                            <Link
                                                                href={submenu.path}
                                                                className="font-light ms-2 text-gray-600 cursor-pointer hover:text-primary text-sm break-words"
                                                            >
                                                                {submenu.name}
                                                            </Link>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ))}
                                        </div>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        )
                    return (
                        <NavbarMenuItem key={`navlink-${index}`}>
                            <Link
                                className={`${pathname === navlink.path ? 'text-primary' : 'text-dark'} text-lg font-semibold`}
                                href={navlink.path}
                            >
                                {navlink.name}
                            </Link>
                        </NavbarMenuItem>
                    )
                })}
                <NavbarMenuItem className='flex gap-4'>
                    <Button
                        className='font-semibold bg-white border-[2px] border-primary text-primary hover:bg-primary hover:text-white'
                        size='lg'
                        as={Link}
                        href={process.env.NEXT_PUBLIC_API_SIGNIN}
                        radius='sm'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sign In
                    </Button>
                    <Button
                        className='font-semibold'
                        size='lg'
                        as={Link}
                        color='primary'
                        href='/contact-us'
                        radius='sm'
                    >
                        Contact Us
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu> */}

            {/* mobile view accordion*/}
            <NavbarMenu className="mt-4 space-y-3 z-[999]">
                {navlinks.slice(0, 4).map((navlink: NavLink, index: number) => {
                    if (navlink.menus) {
                        return (
                            <NavbarMenuItem key={`navlink-${index}`} className="w-full">
                                <Accordion
                                    type="single"
                                    collapsible
                                    className="w-full"
                                >
                                    <AccordionItem value={`accordion-parent-${index}`}>
                                        <AccordionTrigger className="text-lg mb-3">
                                            {navlink.name}
                                        </AccordionTrigger>
                                        <AccordionContent className="space-y-4">
                                            {/* testing */}
                                            <Accordion
                                                type="single"
                                                collapsible
                                                className="w-full space-y-6 mt-2"
                                            >
                                                {navlink.menus.map((menu, idx) => (
                                                    <AccordionItem value={`accordion-child-${idx}`} key={idx}>
                                                        <AccordionTrigger className="text-sm ms-4 font-normal">
                                                            <span className='flex font-semibold items-center gap-2 text-gray-700'>
                                                                {menu.name === "AI Solutions" && <Sparkles size={12} fill="red" />}
                                                                {menu.name}
                                                            </span>
                                                        </AccordionTrigger>
                                                        <AccordionContent>
                                                            <div key={idx} className="ms-10 mt-4">
                                                                <ul className="flex flex-col gap-y-4 h-fit max-h-28 overflow-y-scroll">
                                                                    {menu.submenu.map((submenu, subIdx) => (
                                                                        <li key={subIdx}>
                                                                            <Link
                                                                                href={submenu.path}
                                                                                className="text-gray-700 flex flex-row items-center gap-3 cursor-pointer font-medium hover:text-primary text-sm break-words"
                                                                            >
                                                                                {submenu.name}
                                                                            </Link>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </AccordionContent>
                                                    </AccordionItem>
                                                ))}
                                            </Accordion>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </NavbarMenuItem>
                        )
                    }
                    return (
                        <NavbarMenuItem key={`navlink-${index}`}>
                            <Link
                                className={`${pathname === navlink.path ? 'text-primary' : 'text-dark'} text-lg font-semibold`}
                                href={navlink.path}
                            >
                                {navlink.name}
                            </Link>
                        </NavbarMenuItem>
                    )
                })}

                <NavbarMenuItem className="flex gap-2">
                    <Button
                        className="font-semibold bg-white border-[2px] border-primary text-primary hover:bg-primary hover:text-white"
                        size="lg"
                        as={Link}
                        href={process.env.NEXT_PUBLIC_API_SIGNIN}
                        radius="sm"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sign In
                    </Button>
                    <Button
                        className="font-semibold"
                        size="lg"
                        as={Link}
                        color="primary"
                        href="/contact-us"
                        radius="sm"
                    >
                        Contact Us
                    </Button>
                </NavbarMenuItem>
            </NavbarMenu>


            <NavbarContent justify='end' className='hidden md:flex'>
                <NavbarItem>
                    <Button
                        className='font-semibold bg-white border-[2px] border-primary text-primary hover:bg-primary hover:text-white'
                        size='lg'
                        as={Link}
                        href={process.env.NEXT_PUBLIC_API_SIGNIN}
                        radius='sm'
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sign In
                    </Button>
                </NavbarItem>
                <NavbarItem>
                    <Button
                        className='hidden font-semibold sm:flex'
                        size='lg'
                        as={Link}
                        color='primary'
                        href='/contact-us'
                        radius='sm'
                    >
                        Contact Us
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}
