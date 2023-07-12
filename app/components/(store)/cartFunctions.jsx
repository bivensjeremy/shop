import { commerce } from "@/app/lib/commerce";

export const addToCart = (id) => commerce.cart.add(id);

export const removeFromCart = (id) => commerce.cart.remove(id);

export const emptyCart = () => commerce.cart.empty();