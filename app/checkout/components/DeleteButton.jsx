'use client'

import { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import { useCartDispatch } from "@/app/lib/loadCart";
import { removeFromCart } from "@/app/lib/removeFromCart";

const DeleteButton = ({ productId }) => {
    const { setCart } = useCartDispatch();
    const [loadingState, setLoadingState] = useState(false)

    const handleDelete = async () =>{
        setLoadingState(true);
        try {
            const { success, Cart } = await removeFromCart(productId)
            if(success) {
                setCart(Cart);
                setLoadingState(false);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
            setLoadingState(false);
        }
    }

    return (
        <button
            className={`
                btn
                btn-square
                btn-ghost
                ${loadingState ? 'btn disabled' : ''}
            `}
            onClick={handleDelete}
        >
            {loadingState 
                ? <span className="loading loading-spinner" /> 
                : <HiOutlineTrash className='h-6 w-auto' />
            }
        </button>
    )
}

export default DeleteButton;