import ShopItem from "../ShopItem";
import Tagline from "../Tagline";
import getProducts from "@/app/lib/getProducts";

const Featured = async () => {
    let category,
        query,
        page; 
    const limit = 32;
    
    const { shopItems } = await getProducts(category, query, page, limit);
    const dayOfTheMonth = new Date().getDate();

    return (
        <section id="Featured" className="bg-foreground py-12">
            <Tagline text='Today&apos;s Must Have'/>

            <div className="flex bg-default rounded-md justify-center m-auto py-12 mt-6">
                <ShopItem props={shopItems.data[dayOfTheMonth]} />
            </div>
        </section>
    );
}

export default Featured;