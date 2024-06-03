import { useCartDispatch } from "@/app/utils/loadCart";
import { useState } from "react";
import { TbTrashX } from "react-icons/tb";
import { emptyCart } from "../(store)/cartFunctions";

const EmptyCartButton = () => {
    const [loadingState, setLoadingState] = useState(false);
    const { setCart } = useCartDispatch();

    const deleteCart = async () => {
        setLoadingState(true);
        try {
            const { cart } = await emptyCart();
            if(cart) {
                setCart(cart);
                setLoadingState(false);
            } 
        } catch (error) {
            setLoadingState(false);
            alert('Error deleting cart. Please try again.');
        }
    }
        return (
            <button
                onClick={deleteCart}
                className={`
                    btn 
                    btn-neutral
                    btn-outline
                    ${loadingState ? 'btn-disabled' : ''}
                `}
            >
                {loadingState 
                    ? <span className="loading loading-spinner" /> 
                    : <TbTrashX className="w-5 h-auto" /> 
                }<span className="hidden sm:flex">Empty Cart</span>
            </button>
        )
}

export default EmptyCartButton;