'use client'

import { apparelCategories } from "@/app/data/apparelCategories";
import { Select, SelectItem } from "@nextui-org/react";
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
        <Select
            label="Filter by:"
            variant="bordered"
            selectedKeys={[value]}
            size="sm"
            color="secondary"
            className="w-1/2 font-semibold pt-3 sm:pt-0"
            onChange={handleSelectionChange}
        >
            <SelectItem key={[]} value={[]} className="italic">
                No Filter
            </SelectItem>
            {apparelCategories.map(({ title, slug }) => (
                <SelectItem key={slug} value={slug}>
                    {title}
                </SelectItem>
            ))}
        </Select>
    );
}

export default FilterBy;