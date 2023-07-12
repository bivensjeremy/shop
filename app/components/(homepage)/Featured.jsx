import { commerce } from "@/app/lib/commerce";
import Image from "next/image";
import NavLink from "../NavLink";


const FeaturedItem = ({ props }) => {
    return (
        <div className="flex flex-row gap-3 p-5 bg-[#F0F0F0] text-[#3C486B] rounded-md">
            <div>
                <Image
                    src={props.media.source}
                    alt={props.name}
                    width={300}
                    height={300}
                    className="rounded-md"
                />
            </div>

            <div className="w-1/2 flex flex-col text-center justify-evenly text-5xl">
                <h3 className="">
                    {props.name}
                </h3>
                
                <h3>
                    {props.price.formatted_with_symbol}
                </h3>
                
                <NavLink href={props.checkout_url.display} className="btnCSS w-full">
                    Buy It Now
                </NavLink>
            </div>
        </div>
    )
}

const Featured = async () => {
    const { data: products } = await commerce.products.list({
        limit: 32
    })
    const dayOfTheMonth = new Date().getDate();
    
    return (
        <section id="Featured">
            <div className="p-5">
                <div className="text-center mx-auto max-w-96 md:w-1/2 gap- bg-[#F0F0F0] text-[#3C486B] rounded-md">
                    <h2 className="italic text-4xl p-3 font-semibold">Today&apos;s Must Have</h2>

                    <FeaturedItem props={products[dayOfTheMonth]} />
                </div>
                
            </div>
        </section>
    );
}

export default Featured;