// import {
//     Pagination,
//     PaginationContent,
//     PaginationEllipsis,
//     PaginationItem,
//     PaginationLink,
//     PaginationNext,
//     PaginationPrevious,
// } from "@/components/ui/pagination"

// type Props = {
//     handlePrev: () => void;
//     handleNext: () => void;
//     setPage: (page: number) => void;
//     page: number;
//     totalPage: number;
//     className?: string;
// }

// export default function PaginationComponents({
//     handlePrev,
//     handleNext,
//     page,
//     setPage,
//     totalPage,
//     className
// }: Props) {
//     return (
//         <div className={`${className} w-full flex items-center flex-col gap-2 mb-20`}>
//             <Pagination className="w-full">
//                 <PaginationContent>
//                     <PaginationItem>
//                         <PaginationPrevious
//                             onClick={page <= 1 ? undefined : handlePrev}
//                             aria-disabled={page <= 1}
//                         />
//                     </PaginationItem>
//                     {Array.from({ length: totalPage }, (_, i) => i + 1).slice(0, 3).map((num) => (
//                         <PaginationItem key={num}>
//                             <PaginationLink className="cursor-pointer hover:bg-primary/70" onClick={() => setPage(num)} isActive={page === num}>
//                                 {num}
//                             </PaginationLink>
//                         </PaginationItem>
//                     ))}
//                     {totalPage > 4 && <PaginationEllipsis />}
//                     <PaginationItem>
//                         <PaginationNext
//                             onClick={page >= totalPage ? undefined : handleNext}
//                             aria-disabled={page >= totalPage}
//                         />
//                     </PaginationItem>
//                 </PaginationContent>
//             </Pagination>
//         </div>
//     );
// }

import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"

type Props = {
    handlePrev: () => void;
    handleNext: () => void;
    setPage: (page: number) => void;
    page: number;
    totalPage: number;
    className?: string;
}

export default function PaginationComponents({
    handlePrev,
    handleNext,
    page,
    setPage,
    totalPage,
    className
}: Props) {
    const startPage = Math.max(1, page - 1);
    const endPage = Math.min(totalPage, page + 1);
    const middlePages = [];

    for (let i = startPage; i <= endPage; i++) {
        middlePages.push(i);
    }

    return (
        <div className={`${className} w-full flex items-center justify-center flex-wrap gap-2 mb-20`}>
            <Pagination className="w-full justify-center">
                <PaginationContent>
                    {/* Previous Button */}
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={page > 1 ? handlePrev : undefined}
                            aria-disabled={page <= 1}
                        />
                    </PaginationItem>

                    {/* First Page & Ellipsis */}
                    {startPage > 1 && (
                        <>
                            <PaginationItem>
                                <PaginationLink
                                    onClick={() => setPage(1)}
                                    className="cursor-pointer"
                                >
                                    1
                                </PaginationLink>
                            </PaginationItem>
                            {startPage > 2 && <PaginationEllipsis />}
                        </>
                    )}

                    {/* Middle Pages (Current ±1) */}
                    {middlePages.map((num) => (
                        <PaginationItem key={num}>
                            <PaginationLink
                                onClick={() => setPage(num)}
                                isActive={page === num}
                                className="cursor-pointer"
                            >
                                {num}
                            </PaginationLink>
                        </PaginationItem>
                    ))}

                    {/* Last Page & Ellipsis */}
                    {endPage < totalPage && (
                        <>
                            {endPage < totalPage - 1 && <PaginationEllipsis />}
                            <PaginationItem>
                                <PaginationLink
                                    onClick={() => setPage(totalPage)}
                                    className="cursor-pointer"
                                >
                                    {totalPage}
                                </PaginationLink>
                            </PaginationItem>
                        </>
                    )}

                    {/* Next Button */}
                    <PaginationItem>
                        <PaginationNext
                            onClick={page < totalPage ? handleNext : undefined}
                            aria-disabled={page >= totalPage}
                        />
                    </PaginationItem>
                </PaginationContent>
            </Pagination>
        </div>
    );
}
