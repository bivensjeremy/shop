'use client';

import { Input } from '@nextui-org/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { IoSearch } from 'react-icons/io5'
import { useDebounce } from 'use-debounce';

export default function SearchBar({storeNotAvailable}) {
    const [searchText, setSearchText] = useState('');
    const [searchQuery] = useDebounce(searchText, 500)
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const { replace } = useRouter();

    useEffect(() => {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        searchQuery ? params.set('search', searchQuery) : params.delete('search');
        replace(`${pathname}?${params.toString()}`);
    }, [searchQuery])

    return (
        <div className="relative flex flex-1 flex-shrink-0 m-auto w-full sm:w-2/3">
            <Input 
                isDisabled={storeNotAvailable}
                variant='faded'
                color='default'
                label="Search"
                placeholder='Type to Search...'
                radius='full'
                isClearable
                startContent={
                    <IoSearch className='pointer-events-none flex-shrink-0'/>
                }
                classNames={{
                    clearButton: 'text-red-500 p-0 m-auto text-3xl '
                }}
                onChange={(e) => {
                    setSearchText(e.target.value)
                }}
                onClear={()=>setSearchText('')}
            />
        </div>
    );
}