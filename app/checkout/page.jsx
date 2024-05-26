'use client'

import { useCartState } from "../lib/loadCart";
import Subtotal from "./components/Subtotal";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@nextui-org/react";
import Image from "next/image";
import DeleteButton from "./components/DeleteButton";
import Link from "next/link";

const Page = () => {
    const { line_items, subtotal, hosted_checkout_url, total_items } = useCartState();

    return (
        <div className="m-auto">
            <Table aria-label="Shopping Cart">
                <TableHeader className="m-auto text-center">
                    <TableColumn></TableColumn>
                    <TableColumn>Item</TableColumn>
                    <TableColumn>QTY</TableColumn>
                    <TableColumn>Delete</TableColumn>
                    {/* <TableColumn>Item Price</TableColumn> */}
                    <TableColumn>Price</TableColumn>
                </TableHeader>

                {!line_items || line_items.length === 0 ? (
                    <TableBody emptyContent={"Nothing inside shopping cart."}>{[]}</TableBody>
                ):(
                    <TableBody items={line_items}>
                    {(item) => (
                        <TableRow key={item.id}>
                            <TableCell className="text-center m-auto">
                                <Link href={`/shop/item/${item.id}`}>
                                    <Image
                                        src={item.media.source}
                                        alt={`${item.name} img`}
                                        sizes="20vw"
                                        width={70}
                                        height={100}
                                        className="rounded-md"
                                    />
                                </Link>
                            </TableCell>
                            <TableCell>{item.name}</TableCell>
                            <TableCell>{item.quantity}</TableCell>
                            <TableCell>
                                <DeleteButton productId={item.id} />
                            </TableCell>
                            {/* <TableCell>{item.price.formatted_with_symbol}</TableCell> */}
                            <TableCell>{item.line_total.formatted_with_symbol}</TableCell>
                        </TableRow>
                    )}
                </TableBody>
                )}
            </Table>

            <Subtotal
                subtotal={subtotal}
                totalItems={total_items}
                checkout={hosted_checkout_url}
            /> 
        </div>
    );
}


export default Page;