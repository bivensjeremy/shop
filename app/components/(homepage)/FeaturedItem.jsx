'use client'
import Image from "next/image";
import NavLink from "../NavLink";

const FeaturedItem = ({ props }) => {
    return (
        <div className="flex flex-row gap-3 p-5 rounded-md">
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