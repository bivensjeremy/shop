'use client'

import { useEffect, useState } from "react";
import { ImCart } from "react-icons/im";
import { IoAlertCircleOutline } from "react-icons/io5";
import { TbShoppingCartCheck } from "react-icons/tb";
import { useCartDispatch, useCartState } from "@/app/utils/loadCart";
import { addToCart } from "./cartFunctions";

const AddToCartButton = ({ productId }) => {
    const [buttonState, setButtonState] = useState('')
    const { setCart } = useCartDispatch();
    const { line_items } = useCartState();

    useEffect(() => {
        for (let i = 0; i < line_items.length; i++)
        if (line_items[i].product_id === productId) {
            setButtonState('inCart');
            break;
        } else {
            setButtonState('');
        }
    }, [buttonState])
    
    const handleAdd = async () => {
        setButtonState('adding')
        try {
            const { cart } = await addToCart(productId)
            if(cart){
                setCart(cart)
                setButtonState('inCart')
            } else {
                setButtonState('error')
            }
        } catch (error) {
            console.log(error)
            setButtonState('error')
        }
    }

    function buttonLabel() {
        switch (buttonState) {
            case 'adding': 
                return <><span className="loading loading-spinner"/> Adding to Cart</>
            case 'inCart':
                return <><TbShoppingCartCheck className="w-5"/>Item In Cart</>
            case 'error':
                return <><IoAlertCircleOutline /> Error Adding to Cart</>
            default:
                return <><ImCart /> Add To Cart</>
        }
    }

    return (
        <button 
            onClick={handleAdd}
            className={`
                btn
                btn-primary
                btn-block
                ${
                    buttonState === 'adding' || buttonState === 'inCart' ? 'btn-disabled' :
                    buttonState === 'error' ? 'btn-error' :
                    null
                }
            `}
        >
            <span className="flex gap-2 items-center">
                {buttonLabel()}
            </span>
        </button>
    )
}

export default AddToCartButton;