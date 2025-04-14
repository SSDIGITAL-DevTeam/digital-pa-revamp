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
    totalData,
    currentData
}: {
    handlePrev: () => void;
    handleNext: () => void;
    setPage: (page: number) => void;
    page: number;
    totalPage: number;
    totalData: number;
    currentData: number;
}) {
    return (
        <div className="w-full flex itcems-center justify-between">
            <div className="flex gap-4 items-center min-w-[30%] text-gray-600 text-sm">
                <p>Showing {currentData} from {totalData} data</p>
            </div>
            <Pagination className="w-full justify-end">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={page <= 1 ? undefined : handlePrev}
                            aria-disabled={page <= 1}
                        />
                    </PaginationItem>
                    {Array.from({ length: totalPage }, (_, i) => i + 1).slice(0, 3).map((num) => (
                        <PaginationItem key={num}>
                            <PaginationLink onClick={() => setPage(num)} isActive={page === num}>
                                {num}
                            </PaginationLink>
                        </PaginationItem>
                    ))}
                    {totalPage > 3 && <PaginationEllipsis />}
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
