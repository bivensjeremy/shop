'use client'

import { useState } from "react";
import { Button } from "@nextui-org/react";
import { HiOutlineTrash } from "react-icons/hi2";
import { useCartDispatch } from "@/app/lib/loadCart";
import { removeFromCart } from "@/app/lib/removeFromCart";

const DeleteButton = ({ productId }) => {
    const { setCart } = useCartDispatch();
    const [loadingState, setLoadingState] = useState(false)

    const handleDelete = async () =>{
        setLoadingState(true);
        try {
            const { success, cart } = await removeFromCart(productId)
            if(success) {
                setCart(cart);
                setLoadingState(false);
            }
        } catch (error) {
            alert(`Error: ${error.message}`);
            setLoadingState(false);
        }
    }

    return (
        <Button 
            isIconOnly
            variant="light"
            onPress={handleDelete}
            isLoading={loadingState}
            isDisabled={loadingState}
        >
            <HiOutlineTrash className='h-6 w-auto' />
        </Button>
    )
}

export default DeleteButton;