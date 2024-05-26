import { Card, CardBody, CardFooter, Tooltip } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "../shop/components/AddToCartButton";

const ShopItem = ({props}) => {
    return (
        <Card className="bg-background w-1/2 sm:w-72 rounded-none sm:rounded-lg hover:bg-secondary/20 duration-300" shadow="none">
            <CardBody as={Link} href={`/shop/item/${props.id}`}>
                <div className="relative h-60 w-full rounded-md p-3 m-auto overflow-hidden">
                    <Image
                        src={props.image.url}
                        alt={props.name}
                        sizes='(max-width: 640px) 50vw, 30vw'
                        fill
                        // height={props.image.image_dimensions.height}
                        // width={props.image.image_dimensions.width}
                        placeholder="blur"
                        blurDataURL={props.image.url}
                        className="object-cover rounded-none transition duration-300 ease-in-out hover:scale-105"
                    />
                </div>

                <div className="text-start">
                    <Tooltip content={props.name}>
                        <h5 className="font-semibold text-base line-clamp-1">{props.name}</h5>
                    </Tooltip>
                    
                    <p className="text-sm">SKU: {props.sku}</p>
                    <p className="text-sm">Available: {props.quantity || props.inventory.available}</p>
                    <h5 className="mt-2 font-semibold text-base">{props.price.formatted_with_symbol}</h5>
                </div>
            </CardBody>
            
            <CardFooter className="justify-between pt-0 gap-4">                
                <AddToCartButton productId={props.id} />
            </CardFooter>
        </Card>
    );
}

export default ShopItem;