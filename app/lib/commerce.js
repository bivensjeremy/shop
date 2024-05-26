// import Commerce from "@chec/commerce.js";


// const publicKey = process.env.NEXT_PUBLIC_CHEC_API_KEY;

// const commerce = new Commerce(publicKey)

// export default commerce;



import CommerceSDK from "@chec/commerce.js";

const commerce = new CommerceSDK(process.env.NEXT_PUBLIC_CHEC_API_KEY);

export default commerce;