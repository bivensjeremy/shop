import Image from "next/image";
import { inter_font } from "@/app/lib/fonts";
import getAProduct from "@/app/lib/getAProduct";
import AddToCartButton from "../../components/AddToCartButton";
import ShopItem from "@/app/components/ShopItem";
import { Divider } from "@nextui-org/react";

const Page = async ({ params }) => {
    const { shopItem } = await getAProduct(params.permalink)
    const { id, name, media, description, price, related_products} = shopItem;

    return (
        <div key={id}>
            <div className="flex flex-col md:flex-row min-h-screen justify-center bg-background rounded-md">
                <div className="flex w-full md:w-1/2 relative h-96 md:h-auto rounded-md">
                    {/* <div className="flex w-full"> */}
                        <Image
                            src={media.source}
                            alt={name}
                            fill
                            placeholder='blur'
                            blurDataURL={media.source}
                            priority
                            sizes='(max-width: 768px) 100vw, 50vw'
                            className="object-contain rounded-md p-4"
                        />
                    {/* </div> */}
                </div>
                    
                    <div className="w-full md:w-1/2">
                        <div className="w-3/4 h-3/4 justify-center m-auto flex flex-col text-start gap-1 md:gap-8">
                            <h2 className={`${inter_font.className} font-semibold text-3xl md:text-4xl`}>
                                {name}
                            </h2>

                            <h6 className="text-sm md:text-lg" 
                                dangerouslySetInnerHTML={{__html:description}} 
                            />

                            <h3 className="text-base md:text-xl font-semibold">
                                {price.formatted_with_symbol}
                            </h3>
                            
                            <div className="w-full sm:w-fit">
                                <AddToCartButton productId={id} />
                            </div>
                            
                        </div>
                    </div>
                </div>

                <div className="pt-10">
                    <h5 className="font-semibold text-center text-2xl">
                        Check out these other items
                    </h5>

                    <Divider className="my-3 mx-auto w-1/2" />

                    <div className="flex flex-row flex-wrap justify-evenly">
                        {related_products.map((item) => (
                            <ShopItem 
                                key={item.id}
                                props={item}
                            />
                        ))}
                    </div>
                </div>
            </div>
    );
}

export default Page;