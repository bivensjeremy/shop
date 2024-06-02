import commerce from "./commerce";

export const addToCart = async (id) => {
    try {
        const Cart = await commerce.cart.add(id)
        return {
            success: true,
            Cart
        }
    } catch (error) {
        console.log(error)
        return { success: false }
    }
}