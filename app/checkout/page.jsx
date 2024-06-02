'use client'

import { useCartState } from "../lib/loadCart";
import Subtotal from "./components/Subtotal";
import Image from "next/image";
import DeleteButton from "./components/DeleteButton";
import Link from "next/link";

const Page = () => {
    const { line_items, subtotal, hosted_checkout_url, total_items } = useCartState();

    return (
        <div className="m-auto">
            <div className="overflow-x-auto">
            {!line_items ? (
                <div className="card w-96 bg-base-100 shadow-lg m-auto">
                <div className="card-body">
                    <p className="text-center text-accent">Cart is loading...</p>
                    <div className="card-actions justify-center">
                    <span className="loading loading-dots loading-md text-accent" />
                    </div>
                </div>
            </div>
            ):( line_items.length === 0 ? (
                <div className="card w-96 bg-base-100 shadow-lg m-auto">
                    <div className="card-body">
                        <p className="text-center text-accent">Your cart is empty.</p>
                        <div className="card-actions justify-center">
                            <Link role="button" href='/shop' className="btn btn-primary">Go Shopping</Link>
                        </div>
                    </div>
                </div>
            ):(
                <div className=" bg-neutral shadow-md rounded-lg m-3">
                    <table className="table m-auto text-center">
                    {/* head */}
                    <thead className="">
                        <tr className="">
                            <th></th>
                            <th>Item</th>
                            <th>QTY</th>
                            <th>Delete</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    {/* body */}
                    <tbody className="">
                        {line_items.map(item => (
                            <tr key={item.id}>
                                <th>
                                    <Link href={`/shop/item/${item.id}`}>
                                        <Image
                                            src={item.image.url}
                                            alt={`${item.name} img`}
                                            sizes="20vw"
                                            width={70}
                                            height={100}
                                            className="hidden sm:flex rounded-md"
                                        />
                                    </Link>
                                </th>
                                <td>
                                    <Link href={`/shop/item/${item.id}`}>
                                        <div className="hover:bg-[#F0F0F0] rounded-xl py-4">
                                            {item.name}
                                        </div>
                                        
                                    </Link>
                                </td>
                                <td>{item.quantity}</td>
                                <td><DeleteButton productId={item.id} /></td>
                                <td>{item.line_total.formatted_with_symbol}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                </div>
                
            ))}
                <Subtotal
                    subtotal={subtotal}
                    totalItems={total_items}
                    checkout={hosted_checkout_url}
                />
            </div>
        </div>
    );
}


export default Page;