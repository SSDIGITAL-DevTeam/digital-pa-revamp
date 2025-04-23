"use client"
import { Button } from "@/components/ui/button"

type Props = {
    list: any,
    activeCategory: string | undefined,
    setActiveCategory: (category: string | undefined) => void
}

export default function ListCategories({ list, activeCategory, setActiveCategory }: Props): JSX.Element {
    const category = decodeURIComponent(activeCategory || "all");
    // console.log("category", category)
    // console.log("list", list)

    return (
        <div className="flex gap-3 items-center justify-start w-full max-w-[400px] lg:max-w-[600px] overflow-x-auto scrollbar-hide px-2">
            <Button
                onClick={() => setActiveCategory(undefined)}
                key="insights-category-all"
                className={`whitespace-nowrap font-semibold text-sm md:text-base py-2 px-3 rounded-sm transition-colors ${category === "all" ? "bg-primary text-white" : "text-black bg-gray-100"
                    }`}
            >
                All
            </Button>

            {list.map((d: any) => (
                <Button
                    onClick={() => setActiveCategory(d.id)}
                    key={`insights-category-${d.slug}`}
                    className={`whitespace-nowrap font-semibold text-sm md:text-base py-2 px-3 rounded-sm transition-colors ${category === d.id ? "bg-primary text-white" : "text-black bg-gray-100"
                        }`}
                >
                    {d.name}
                </Button>
            ))}
        </div>

    )
}