// import Commerce from "@chec/commerce.js";


// const publicKey = process.env.NEXT_PUBLIC_CHEC_API_KEY;

// const commerce = new Commerce(publicKey)

// export default commerce;



import CommerceSDK from "@chec/commerce.js";

const commerce = new CommerceSDK('pk_271851784e7f71eb50c958dd7193d42056fa3cf5437c2');

export default commerce;