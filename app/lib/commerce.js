// import Commerce from "@chec/commerce.js";


// const publicKey = process.env.NEXT_PUBLIC_CHEC_API_KEY;

// const commerce = new Commerce(publicKey)

// export default commerce;



import CommerceSDK from "@chec/commerce.js";

const commerce = new CommerceSDK('pk_27185ef0695f9d4b480f840c8b4ceb36e07064c24a88f');

export default commerce;