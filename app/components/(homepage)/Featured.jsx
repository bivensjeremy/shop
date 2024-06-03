import { commerce } from "@/app/lib/commerce";
import Image from "next/image";
import NavLink from "../NavLink";
import ShopItem from "../ShopItem";
import getProducts from "@/app/lib/getProducts";


const FeaturedItem = ({ props }) => {
    return (
        <div className="flex bg-neutral rounded-md justify-center m-auto py-12 mt-6">
            <ShopItem props={props} />
        </div>
        // <div className="flex flex-row gap-3 p-5 bg-[#F0F0F0] text-[#3C486B] rounded-md">
        //     <div>
        //         <Image
        //             src={props.media.source}
        //             alt={props.name}
        //             width={300}
        //             height={300}
        //             className="rounded-md"
        //         />
        //     </div>

        //     <div className="w-1/2 flex flex-col text-center justify-evenly text-5xl">
        //         <h3 className="">
        //             {props.name}
        //         </h3>
                
        //         <h3>
        //             {props.price.formatted_with_symbol}
        //         </h3>
                
        //         <NavLink href={props.checkout_url.display} className="btnCSS w-full">
        //             Buy It Now
        //         </NavLink>
        //     </div>
        // </div>
    )
}

const Featured = async () => {
    // const { data: products } = await commerce.products.list({
    //     limit: 32
    // })
    let category,
        query,
        page; 
    const limit = 32;
    const { shopItems } = await getProducts(category, query, page, limit);
    const dayOfTheMonth = new Date().getDate();

    return (
        <div className="flex bg-neutral rounded-md justify-center m-auto py-12 mt-6">
            <ShopItem props={shopItems.data[dayOfTheMonth]} />
        </div>
    );
}

export default Featured;