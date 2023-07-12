import Image from "next/image";
import Link from "next/link";

const RelatedProducts = ({ id, name, media, price }) => {
    return (
        <Link href={`/shop/item/${id}`} key={id} className="h-52 w-52">
            <div className="flex w-full h-full relative rounded-lg overflow-visible">
                <Image
                    src={media.source}
                    alt={name}
                    fill
                    placeholder='blur'
                    blurDataURL={media.source}
                    sizes='33vw'
                    className="object-cover"
                />
            </div>

            <div className="text-center">
                <h2 className="text-xl">
                    {name}
                </h2>

                <h3 className="text-xl">
                    {price.formatted_with_symbol}
                </h3>
            </div>
        </Link>
    );
}

export default RelatedProducts;