'use client'

import { useEffect, useState } from "react";
import { useCartDispatch, useCartState } from "@/app/lib/loadCart";
import { Button } from "@nextui-org/react";
import { ImCart } from "react-icons/im";
import { addToCart } from "@/app/lib/addToCart";
import { unstable_noStore as noStore } from 'next/cache';

const AddToCartButton = ({ productId }) => {
    noStore();
    const [buttonDisabled, setButtonDisabled] = useState(false);
    const [loadingState, setLoadingState] = useState(false);
    const [buttonTitle, setButtonTitle] = useState('Add to Cart')
    const { setCart } = useCartDispatch();
    const { line_items } = useCartState();

    useEffect(() => {
        for (let i = 0; i < line_items.length; i++)
        if (line_items[i].product_id === productId) {
            setButtonDisabled(true);
            setButtonTitle('Item in Cart');
            break;
        }
    }, [])

    const handleAdd = async () => {
        setLoadingState(true);
    try {
        const { success, cart } = await addToCart(productId);
        if(success){
            setCart(cart)
            setLoadingState(false);
            setButtonDisabled(true);
            setButtonTitle('Item in Cart');
        }
    } catch (error) {
        setLoadingState(false);
        setButtonTitle(error?.data?.error?.message);
        setButtonDisabled(true);
    }
    }
    return (
        <Button 
            onPress={handleAdd}
            isLoading={loadingState}
            isDisabled={buttonDisabled || loadingState}
            color={buttonDisabled ? 'secondary' : 'primary'}
            // className="w-fit"
            fullWidth
            variant='solid'
            radius="sm"
            className="flex flex-wrap"
            startContent={
                loadingState ? '' : <ImCart />
            }
        >
            {buttonTitle}
        </Button>
    )
}

export default AddToCartButton;