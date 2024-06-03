import { commerce } from "@/app/lib/commerce";
import Banner from "../../../components/(store)/Banner"
import Image from "next/image";
import RelatedProducts from "@/app/components/(store)/RelatedProducts";
import { chonburi_font, inter_font } from "@/app/lib/fonts";
import { Suspense } from "react";
import Spinner from "@/app/components/(store)/Spinner";
import AddToCartButton from "@/app/components/(store)/AddToCartButton";
import getAProduct from "@/app/lib/getAProduct";
import ShopItem from "@/app/components/ShopItem";

const page = async({ params }) => {
    const { shopItem } = await getAProduct(params.permalink)
    const { id, name, image, description, price, related_products} = shopItem;
    
    return (
        <div key={id}>
            <div className="flex flex-col md:flex-row min-h-screen justify-center bg-[#F0F0F0] rounded-md text-accent">
                <div className="flex w-full md:w-1/2 relative h-96 md:h-auto rounded-md">
                    <Image
                        src={image.url}
                        alt={name}
                        fill
                        placeholder='blur'
                        blurDataURL={image.url}
                        priority
                        sizes='(max-width: 768px) 100vw, 50vw'
                        className="object-contain rounded-md p-4"
                    />
                </div>
                    
                    <div className="w-full md:w-1/2">
                        <div className="w-3/4 h-3/4 justify-center m-auto flex flex-col text-start gap-1 md:gap-6">
                            <h2 className={`${inter_font.className} font-semibold text-3xl md:text-4xl`}>
                                {name}
                            </h2>

                            <h6 className="text-sm md:text-base" 
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
                    <h5 className="font-semibold text-center text-2xl text-accent">
                        Check out these other items
                    </h5>

                    <div className="divider divider-accent w-1/2 mx-auto" />

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

export default page;