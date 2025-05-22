import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Menus } from "@/constants/navlink"
import { Sparkles } from "lucide-react"
import Link from "next/link"

export function FooterPopover({ name, menus }: { name: string; menus: Menus[] }) {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <span className="cursor-pointer">{name}</span>
            </PopoverTrigger>
            <PopoverContent className="w-fit">
                <div className="columns-2 gap-2 md:gap-6 p-3">
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
            </PopoverContent>
        </Popover>
    )
}
