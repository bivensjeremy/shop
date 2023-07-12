'use client'

import { useCartDispatch, useCartState } from "@/app/utils/loadCart"
import { addToCart } from "./cartFunctions";
import { useEffect, useState } from "react";

const AddToCartButton = ({ productId }) => {
    const [addSuccess, setAddSuccess] = useState('');
    const { setCart } = useCartDispatch();
    const { line_items } = useCartState();

    useEffect(() => {
        for (let i = 0; i < line_items.length; i++)
        if (line_items[i].product_id === productId) {
            setAddSuccess('true')
            break;
        }
    }, [])

    const cartAdd = async (productID) => {
        await addToCart(productID).then(
            ({cart}) => setCart(cart)
        ).then(
            setAddSuccess('true')
        )
    }

    switch (addSuccess) {
        case 'true':
            return (
                <button className="btnThreeCSS" disabled>Item Added!</button>
            )
        default:
            return (
                <button onClick={() => cartAdd(productId)} className="btnCSS">
                    Add to Cart
                </button>
            )
    }
}

export default AddToCartButton;