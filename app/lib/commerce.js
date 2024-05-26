import Commerce from "@chec/commerce.js";

const publicKey = process.env.NEXT_PUBLIC_CHEC_API_KEY;

export const commerce = new Commerce(publicKey)