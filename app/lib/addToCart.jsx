import { commerce } from "./commerce";

// export default function addToCart(id) {
// // console.log(commerce.cart)
//     try {
//         commerce.cart.add(id);
//         return {
//             success: true,
//             message: 'Item Added'
//         }
//     } catch (error) {
//         return {
//             success: false,
//             message: error.message
//         }
//     }
// }


export const addToCart = async (id) => await commerce.cart.add(id)