"use client"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Menus } from "@/constants/navlink"
// import { useFooterStore } from "@/store/navbarStore";
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function FooterPopover({ name, menus }: { name: string; menus: Menus[] }) {

    // const setIsOpenNavbar = useFooterStore((state) => state.updateNavbar)

    // const setIsOpenService = useFooterStore((state) => state.updateService)
    return (
        <Popover>
            <PopoverTrigger
            // onClick={() =>{
            //     setIsOpenNavbar(true)
            //     setIsOpenService(true)
            // }}
            >
                <span className="cursor-pointer">{name}</span>
            </PopoverTrigger>
            <PopoverContent className="w-[80vw] sm:w-fit">
                <div className="columns-2 gap-2 md:gap-6 p-3 hidden sm:block">
                    {menus.map((menu, idx) => (
                        <ul key={idx} className="flex flex-col gap-2 py-2 md:p-4">
                            <li>
                                {menu.name === "AI Solutions" ? (
                                    <span className="font-semibold text-[14px] md:text-base text-primary flex items-center gap-2">
                                        AI Solutions <Sparkles size={20} fill="red" />
                                    </span>
                                ) : (
                                    <span className="font-semibold text-[14px] md:text-base text-primary">{menu.name}</span>
                                )}
                            </li>
                            {menu.submenu.map((submenu, subIdx) => (
                                <li key={subIdx}>
                                    <Link href={submenu.path} className="font-light text-gray-700 cursor-pointer hover:text-primary text-[12px] md:text-sm">
                                        {submenu.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>

                {/* testing */}
                <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-6 sm:hidden p-4 rounded-2xl"
                >
                    {menus.map((menu, idx) => (
                        <AccordionItem value={`accordion-child-${idx}`} key={`accordion-child-${idx}`}>
                            <AccordionTrigger className="text-sm ms-4 font-normal">
                                <span className='flex font-semibold items-center gap-2 text-gray-700'>
                                    {menu.name === "AI Solutions" && <Sparkles size={12} fill="red" />}
                                    {menu.name}
                                </span>
                            </AccordionTrigger>
                            <AccordionContent>
                                <div key={idx} className="ms-10 mt-4">
                                    <ul className="flex flex-col gap-y-3">
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
            </PopoverContent>
        </Popover>
    )
}
