import Image from "next/image";
import Link from "next/link";
import DeleteButton from "./DeleteButton";

const ShoppingCartItems = ({ props }) => {
    const { id, product_id, media, name, quantity, line_total } = props;

    return (
        <div className="grid grid-cols-5 m-3">   
            <Link href={`/shop/item/${product_id}`}>
                {/* <div className="relative h-28 p-3 m-auto overflow-hidden"> */}
                    <Image
                        src={media.source}
                        alt={name}
                        sizes='20vw'
                        width={150}
                        height={50}
                        placeholder="blur"
                        blurDataURL={media.source}
                        className=""
                    />
                {/* </div> */}
            </Link>

                <h6 className="m-auto text-xl">
                    {name}
                </h6>
            
                <h5 className="m-auto text-lg">
                    {quantity}
                </h5>

                    <DeleteButton productId={id} />
            
                    <h5 className="m-auto text-lg">
                        {line_total.formatted_with_symbol}
                    </h5>
        </div>
    );
}

export default ShoppingCartItems;