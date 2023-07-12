'use client'

import { useCartDispatch } from "@/app/utils/loadCart"
import { useState } from "react";
import { removeFromCart } from "../(store)/cartFunctions";
import { TrashIcon } from "@heroicons/react/24/solid";
import Spinner from "../(store)/Spinner";

const DeleteButton = ({ productId }) => {
    const [working, setWorking] = useState(false)
    const { setCart } = useCartDispatch();

    const deleteItem = (productID) => {
        setWorking(true)
        removeFromCart(productID).then(
            
            ({cart}) => setCart(cart)
            
        )
    }

    if (working) {
        return <Spinner />
    } 
        return (
            <div className="m-auto">
                <button onClick={() => deleteItem(productId)}>
                <TrashIcon className="h-6 w-6" />
            </button>
            </div>
            
        )
    
}

export default DeleteButton;