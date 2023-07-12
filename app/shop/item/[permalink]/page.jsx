import { commerce } from "@/app/lib/commerce";
import Banner from "../../../components/(store)/Banner"
import Image from "next/image";
import RelatedProducts from "@/app/components/(store)/RelatedProducts";
import { chonburi_font } from "@/app/lib/fonts";
import { Suspense } from "react";
import Spinner from "@/app/components/(store)/Spinner";
import AddToCartButton from "@/app/components/(store)/AddToCartButton";

const page = async({ params }) => {
    const product = await commerce.products.retrieve(params.permalink)
    
    return (
        <div>
            <Banner 
                props={product.name}
            />

            <div key={product.id} className="py-12 px-3">
                <div className="flex flex-col md:flex-row gap-5 h-screen justify-center">
                    <div className="flex w-full lg:w-1/3 h-5/6 relative rounded-md">
                        <Suspense fallback={<Spinner />}>
                            <Image
                                src={product.media.source}
                                alt={product.name}
                                fill
                                // width={500}
                                // height={300}
                                placeholder='blur'
                                blurDataURL={product.media.source}
                                priority
                                sizes='50vw'
                                className="object-cover rounded-md"
                            />
                        </Suspense>
                    </div>
                    
                    <div className="w-full lg:w-1/4 h-3/4 flex flex-col lg:justify-evenly text-center lg:text-start">
                        <h2 className={`${chonburi_font.className} text-5xl pb-5`}>
                            {product.name}
                        </h2>
                        <div>
                            <h4 className="text-2xl mb-3">
                                Product Description:
                            </h4>
                            
                        <h6 className="pb-5 text-xl" 
                            dangerouslySetInnerHTML={{__html:product.description}} 
                        />
                        </div>

                        <h3 className="text-2xl pb-5">
                            {product.price.formatted_with_symbol}
                        </h3>
                        
                        <AddToCartButton productId={product.id} />
                    </div>
                </div>

                <div>
                    <h5 className="text-center text-2xl pb-5">
                        Check out these other items
                    </h5>

                    <div className="flex flex-row justify-evenly gap-1">
                        {product.related_products.map(RelatedProducts)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default page;