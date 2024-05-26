import { commerce } from "./commerce";

export default async function getAProduct(permalink) {
    try {
        const shopItem = await commerce.products.retrieve(permalink)
        return { shopItem }
    } catch (e) {
        throw new Error(e.message)
    }
}