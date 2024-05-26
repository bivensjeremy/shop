import { emptyCart } from "@/app/lib/emptyCart";
import { useCartDispatch } from "@/app/lib/loadCart";
import { Button } from "@nextui-org/react";
import { useState } from "react";
import { TbTrashX } from "react-icons/tb";

const EmptyCartButton = () => {
    const [loadingState, setLoadingState] = useState(false);

    const { setCart } = useCartDispatch();

    const deleteCart = async () => {
        setLoadingState(true);
        try {
            const { success, cart } = await emptyCart();
            if(success) {
                setCart(cart);
                setLoadingState(false);
            } 
        } catch (error) {
            setLoadingState(false);
            alert('Error deleting cart. Please try again.');
        }
    }
        return (
            <Button
                onPress={deleteCart}
                isLoading={loadingState}
                isDisabled={loadingState}
                color="secondary"
                variant="bordered"
                size="lg"
                startContent={
                    loadingState ? '' : <TbTrashX className="w-5 h-auto"/>
                }
            >
                <span className="hidden sm:flex">Empty Cart</span>
            </Button>
        )
}

export default EmptyCartButton;