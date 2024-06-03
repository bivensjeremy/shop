'use client'

import { useCartDispatch } from "@/app/utils/loadCart"
import { useState } from "react";
import { removeFromCart } from "../(store)/cartFunctions";
import { HiOutlineTrash } from "react-icons/hi2";

const DeleteButton = ({ productId }) => {
    const { setCart } = useCartDispatch();
    const [loadingState, setLoadingState] = useState(false)

    const handleDelete = async () =>{
        setLoadingState(true);
        try {
            const { cart } = await removeFromCart(productId)
            if(cart) {
                setCart(cart);
                setLoadingState(false);
            } else {
                alert(`Error: ${error.message}`);
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
                hover:bg-[#F0F0F0]
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