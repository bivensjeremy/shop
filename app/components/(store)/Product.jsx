import Image from "next/image";
import NavLink from "../NavLink";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

const Product = ({props}) => {
    const { id, name, price, checkout_url, image,  } = props
    

    return (
        <div key={id} className="px-3 py-6 max-w-1/5">
            <Link href={`/shop/item/${id}`}>
                <div className="relative h-96 rounded-md p-3 m-auto overflow-hidden">
                    <Image
                        src={image.url}
                        alt={name}
                        sizes='20vw'
                        fill
                        placeholder="blur"
                        blurDataURL={image.url}
                        className="object-cover rounded-md transition duration-300 ease-in-out hover:scale-105"
                    />
                </div>
            </Link>
            
            <div className="text-center m-auto">
                <h5 className="text-lg">{name}</h5>
                <p className="mb-1">{price.formatted_with_symbol}</p>

                <div className="grid grid-cols-2 gap-1 text-center">
                    <AddToCartButton productId={id} />

                    <NavLink href={checkout_url.display} className="btnTwoCSS w-full">
                        Buy Now
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default Product;