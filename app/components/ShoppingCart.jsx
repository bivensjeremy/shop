'use client'
import { ImCart } from "react-icons/im";
import { Badge, Button } from "@nextui-org/react";
import Link from "next/link";
import { useCartState } from "../lib/loadCart";

const ShoppingCart = () => {
    const { total_items } = useCartState();
    return (
        <Badge 
            content={total_items} 
            color="primary"
            isInvisible={total_items === 0}
            showOutline={false}
            shape="circle"
            isDot
            className="mt-1 text-foreground"
        >
            <Button as={Link} isIconOnly href="/checkout" variant="light">
                <ImCart className="w-5 h-5 text-default"/>
            </Button>
        </Badge>
        
    );
}

export default ShoppingCart;