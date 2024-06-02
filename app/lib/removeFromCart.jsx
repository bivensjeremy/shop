import commerce from "./commerce";

export const removeFromCart = async (id) => {
    try {
        const Cart = await commerce.cart.remove(id)
        return {
            success: true,
            Cart
        }
    } catch (error) {
        console.log(error)
        return {
            success: false
        }
    }
}