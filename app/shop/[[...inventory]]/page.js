import { commerce } from "../../lib/commerce";
import Category from "../../components/(store)/Banner";
import Product from "../../components/(store)/Product";
import { Suspense } from "react";
import Spinner from "@/app/components/(store)/Spinner";



const  page = async({ params }) => {
    var category_slug = (params === undefined) ? '' : params.inventory
    const {data: products} = await commerce.products.list({
        limit: 100,
        category_slug: category_slug
    })
    
    return (
        <div className="">
            <Category props={category_slug} />
            
            <div className="p-3 mx-auto">
                <div className="flex flex-wrap justify-center">
                    {products.map((item) => (
                        <Suspense fallback={ <Spinner />} key={item.id}>
                            <Product props={item} />
                        </Suspense>
                    ))}
                </div>

                {/* <div id="shirts" className="flex flex-wrap justify-center">
                    {shirts.map((shirt) => (
                        <Product props={shirt} />
                    ))}
                </div>

                <div id="pants" className="flex flex-wrap justify-center">
                    {pants.map((pant) => (
                        <Product props={pant} />
                    ))}
                </div>

                <div id="hats" className="flex flex-wrap justify-center">
                    {hats.map((hat) => (
                        <Product props={hat} />
                    ))}
                </div>

                <div id="games" className="flex flex-wrap justify-center">
                    {games.map((game) => (
                        <Product props={game} />
                    ))}
                </div> */}
            </div>
        </div>
    );
}

export default page;