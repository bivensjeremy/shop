'use client'
import { ImCart } from "react-icons/im";
import Link from "next/link";
import { useCartState } from "../utils/loadCart";

const ShoppingCart = () => {
    const { total_items } = useCartState();
    return (
        <Link tabIndex={0} role="button" className="btn btn-ghost btn-square" href='/checkout'>
            <div className="indicator">
                <span className={`${total_items === 0 ? 'hidden' : 'flex'} indicator-item badge badge-primary`}>{total_items}</span>
                <ImCart className="w-5 h-5 text-neutral mr-2" />
            </div>
        </Link>
    );
}

export default ShoppingCart;