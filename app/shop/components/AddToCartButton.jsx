'use client'

import { useEffect, useState } from "react";
import { useCartDispatch, useCartState } from "@/app/lib/loadCart";
import { ImCart } from "react-icons/im";
import { addToCart } from "@/app/lib/addToCart";
import { IoAlertCircleOutline } from "react-icons/io5";
import { TbShoppingCartCheck } from "react-icons/tb";

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
            const { Cart, success } = await addToCart(productId)
            if(success){
                setCart(Cart)
                setButtonState('inCart')
            } else {
                setButtonState('error')
            }
        } catch (error) {
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