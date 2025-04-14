"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Props ={
    list : any,
    activeCategory : string | undefined,
    setActiveCategory : (category : string | undefined) => void
}

export default function ListCategories({ list, activeCategory, setActiveCategory }: Props): JSX.Element {
    const category = decodeURIComponent(activeCategory || "all");
    // console.log("category", category)
    // console.log("list", list)

    return (
        <div className="flex gap-3 items-center flex-wrap ">
            <Button onClick={()=>setActiveCategory(undefined)} key={`insights-category-all`} className={`font-semibold text-base py-2 px-3 rounded-sm ${category === "all" ? "bg-primary text-white" : "text-black bg-gray-100"}`}>All</Button>
            {
                list.map((d: any) => (
                    <Button onClick={(()=>setActiveCategory(d.blogCategory.id))} key={`insights-category-${d.blogCategory.slug}`} className={`font-semibold py-2 px-3 rounded-sm text-base ${category === d.blogCategory.id ? "bg-primary text-white" : "text-black bg-gray-100"}`}>{d.blogCategory.name}</Button>
                ))
            }
        </div>
    )
}