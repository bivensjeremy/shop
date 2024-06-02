import commerce from "./commerce";

export const emptyCart = async () => {
    try {
        const Cart = await commerce.cart.empty()
        return {
            success: true,
            Cart
        }
    } catch (error) {
        console.log(error)
        return { success: false }
    }
}