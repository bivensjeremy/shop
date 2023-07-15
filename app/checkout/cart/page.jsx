'use client'
import EmptyCart from "@/app/components/(checkout)/EmptyCart";
import ShoppingCartItems from "@/app/components/(checkout)/ShoppingCartItems";
import Subtotal from "@/app/components/(checkout)/Subtotal";
import Banner from "@/app/components/(store)/Banner";
import { useCartState } from "@/app/utils/loadCart";


const Page = () => {
    const {line_items, subtotal, hosted_checkout_url } = useCartState();

    if (line_items.length === 0) return <EmptyCart />
    
    return (
        <div>
            <Banner props="Shopping Cart" />

                <div className="py-10 lg:w-2/3 m-auto">
                    <div className="hidden lg:grid grid-cols-5 my-3 p-1 text-center ">
                        <div className="col-span-2">
                            Product
                        </div>

                        <div>
                            Quantity
                        </div>

                        <div>
                            Delete
                        </div>

                        <div>
                            Price
                        </div>
                        
                    </div>

                    <hr className="w-full py-3"/>
                        {line_items.map((item) => (
                            <ShoppingCartItems
                                key={item.id}
                                props={item}
                            />
                            
                            
                        ))} 
                    <hr className="w-full py-3"/>
                    <Subtotal
                        subtotal={subtotal}
                        totalItems={line_items.length}
                        checkout={hosted_checkout_url}
                    /> 
                </div>
            
        </div>
    );
}


export default Page;