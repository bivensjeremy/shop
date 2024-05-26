'use client'

import { Pagination } from "@nextui-org/react";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from "react";

const PaginationComp = ({ paginationData }) => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const [currentPage, setCurrentPage] = useState(paginationData.current_page);
    const { push } = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set('page', currentPage.toString());
        push(`${pathname}?${params.toString()}`);
    }, [currentPage])

    return (
        <div className="flex justify-center py-6">
            <Pagination
                total={paginationData.total_pages}
                page={paginationData.current_page}
                classNames={{
                    wrapper: 'gap-2'
                }}
                onChange={setCurrentPage}
            />
        </div>
    );
}

export default PaginationComp;