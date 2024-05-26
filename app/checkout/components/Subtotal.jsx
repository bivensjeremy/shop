import Link from "next/link";
import EmptyCartButton from "./EmptyCartButton";
import { Button, Card, CardBody } from "@nextui-org/react";
import { ImCart } from "react-icons/im";


const Subtotal = ({ subtotal, checkout }) => {
    if (!subtotal) return 

    return (
        <Card className="mt-4">
            <CardBody className="flex flex-row justify-evenly items-center">
                <EmptyCartButton />

                <Button as={Link} href={checkout} variant="solid" color="primary" size="lg" startContent={<ImCart />}>
                    <span className="hidden sm:flex">Checkout</span>
                </Button>

                <div className="text-center">
                    <h4 className="text-sm font-semibold">
                        Subtotal:
                    </h4>

                    <h4 className="text-base">
                        {subtotal.formatted_with_symbol}
                    </h4>
                </div>
            </CardBody>
        </Card>
    );
}

export default Subtotal;