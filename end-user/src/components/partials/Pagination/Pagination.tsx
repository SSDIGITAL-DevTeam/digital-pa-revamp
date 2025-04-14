import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

export default function PaginationComponents({
    handlePrev,
    handleNext,
    page,
    setPage,
    totalPage,
    className
}: {
    handlePrev: () => void;
    handleNext: () => void;
    setPage: (page: number) => void;
    page: number;
    totalPage: number;
    className?: string;
}) {
    return (
        <div className={`${className} w-full flex items-center flex-col gap-2 mb-20`}>
            <Pagination className="w-full">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={page <= 1 ? undefined : handlePrev}
                            aria-disabled={page <= 1}
                        />
                    </PaginationItem>
                    {Array.from({ length: totalPage }, (_, i) => i + 1).slice(0, 3).map((num) => (
                        <PaginationItem key={num}>
                            <PaginationLink className="cursor-pointer hover:bg-primary/70" onClick={() => setPage(num)} isActive={page === num}>
                                {num}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    {totalPage > 4 && <PaginationEllipsis />}
                    <PaginationItem>
                        <PaginationNext
                            onClick={page >= totalPage ? undefined : handleNext}
                            aria-disabled={page >= totalPage}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
