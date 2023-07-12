'use client'

import { useCartState } from "@/app/utils/loadCart";

const ShoppingCartNav = () => {
    const { line_items } = useCartState();
    if (line_items.length === 0) return null;
    return (
        <span className="absolute -mt-3 rounded-full bg-[#d6bb3f] px-2 py-1 text-[0.6rem] leading-none text-white">{line_items.length}</span>
    );
}

export default ShoppingCartNav;