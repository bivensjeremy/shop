import { useCartDispatch } from "@/app/utils/loadCart";
import { emptyCart } from "../(store)/cartFunctions";
import { useState } from "react";
import Spinner from "../(store)/Spinner";

const EmptyCartButton = () => {
    const [working, setWorking] = useState(false)
    const { setCart } = useCartDispatch();

    const deleteCart = () => {
        setWorking(true)
        emptyCart().then(
            ({cart}) => setCart(cart)
        )
    }

    if (working) {
        return (
            <button disabled className="btnCSS">
                Emptying Cart...
            </button>
        )
    } 
        return (
            <button onClick={() => deleteCart()} className="btnTwoCSS">
                Empty Cart
            </button>
        )
}

export default EmptyCartButton;