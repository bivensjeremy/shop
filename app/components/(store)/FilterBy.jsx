'use client'

import { apparelCategories } from '@/app/database/apparelCategories';
import { useRouter } from 'next/navigation';
import { useState } from "react";

const FilterBy = ({ category }) => {
    const [value, setValue] = useState(category);
    const { replace } = useRouter();

    const handleSelectionChange = (e) => {
        setValue(e.target.value);
        replace(`/shop/${e.target.value}`)
    };
    
    return (
        <select 
            className="select select-secondary w-1/2"
            onChange={handleSelectionChange}
        >
            <option disabled selected>Filter By:</option> 
            <option value={[]} className="italic">No Filter</option>
            {apparelCategories.map(({ title, slug}) => (
                <option 
                    key={slug} 
                    value={slug}
                    selected={value === slug}
                >{title}</option>
            ))}
        </select>
    );
}

export default FilterBy;