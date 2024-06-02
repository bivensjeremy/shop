
import getProducts from "@/app/lib/getProducts";
import ShopItem from "../components/ShopItem";
import Tagline from "../components/Tagline";

const Featured = async () => {
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