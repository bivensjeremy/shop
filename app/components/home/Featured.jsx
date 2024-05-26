import { commerce } from "@/app/lib/commerce";
import ShopItem from "../ShopItem";
import Tagline from "../Tagline";

const Featured = async () => {
    const { data: products } = await commerce.products.list({ limit: 32 })
    const dayOfTheMonth = new Date().getDate();
    
    return (
        <section id="Featured" className="bg-foreground py-12">
            <Tagline text='Today&apos;s Must Have'/>

            <div className="flex bg-default rounded-md justify-center m-auto py-12 mt-6">
                <ShopItem props={products[dayOfTheMonth]} />
            </div>
        </section>
    );
}

export default Featured;