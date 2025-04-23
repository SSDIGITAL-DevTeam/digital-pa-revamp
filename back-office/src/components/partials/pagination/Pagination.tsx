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
//     totalData: number;
//     currentData: number;
// }
// export default function PaginationComponents({
//     handlePrev,
//     handleNext,
//     page,
//     setPage,
//     totalPage,
//     totalData,
//     currentData
// }: Props) {


//     return (
//         <div className="w-full flex itcems-center justify-between">
//             <div className="flex gap-4 items-center min-w-[30%] text-gray-600 text-sm">
//                 <p>Showing {currentData} from {totalData} data</p>
//             </div>
//             <Pagination className="w-full justify-end">
//                 <PaginationContent>
//                     <PaginationItem>
//                         <PaginationPrevious
//                             onClick={page <= 1 ? undefined : handlePrev}
//                             aria-disabled={page <= 1}
//                         />
//                     </PaginationItem>
//                     {Array.from({ length: totalPage }, (_, i) => i + 1).slice(page-2, 2).map((num) => (
//                         <PaginationItem key={num}>
//                             <PaginationLink onClick={() => setPage(num)} isActive={page === num}>
//                                 {num}
//                             </PaginationLink>
//                         </PaginationItem>
//                     ))}
//                     {page + 2 >= 3 && <PaginationEllipsis />}
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
    totalData: number;
    currentData: number;
}

export default function PaginationComponents({
    handlePrev,
    handleNext,
    page,
    setPage,
    totalPage,
    totalData,
    currentData
}: Props) {

    const startPage = Math.max(1, page - 1);
    const endPage = Math.min(totalPage, page + 1);
    const middlePages = [];

    for (let i = startPage; i <= endPage; i++) {
        middlePages.push(i);
    }

    return (
        <div className="w-full flex items-center justify-between flex-wrap gap-4">
            <div className="flex gap-4 items-center min-w-[30%] text-gray-600 text-sm">
                <p>Showing {currentData} from {totalData} data</p>
            </div>
            <Pagination className="w-full justify-end">
                <PaginationContent>
                    <PaginationItem>
                        <PaginationPrevious
                            onClick={page > 1 ? handlePrev : undefined}
                            aria-disabled={page <= 1}
                        />
                    </PaginationItem>

                    {/* Show first page if needed */}
                    {startPage > 1 && (
                        <>
                            <PaginationItem>
                                <PaginationLink onClick={() => setPage(1)} className="cursor-pointer">
                                    1
                                </PaginationLink>
                            </PaginationItem>
                            {startPage > 2 && <PaginationEllipsis />}
                        </>
                    )}

                    {/* Show current and neighbors (n-1, n, n+1) */}
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

                    {/* Show last page if needed */}
                    {endPage < totalPage && (
                        <>
                            {endPage < totalPage - 1 && <PaginationEllipsis />}
                            <PaginationItem>
                                <PaginationLink onClick={() => setPage(totalPage)} className="cursor-pointer">
                                    {totalPage}
                                </PaginationLink>
                            </PaginationItem>
                        </>
                    )}

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
