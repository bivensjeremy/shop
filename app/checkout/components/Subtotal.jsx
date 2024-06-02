import Link from "next/link";
import EmptyCartButton from "./EmptyCartButton";
import { ImCart } from "react-icons/im";


const Subtotal = ({ subtotal, checkout }) => {
    if (!subtotal) return 

    return (
        <div className="card mt-4 bg-accent-content">
            <div className="card-actions py-4 flex flex-row justify-around items-center">
                <EmptyCartButton />

                <Link role="button" href={checkout} className="btn btn-primary">
                    <ImCart /> <span className="hidden sm:flex">Checkout</span>
                </Link>

                <div className="text-center">
                    <h4 className="text-sm font-semibold">
                        Subtotal:
                    </h4>

                    <h4 className="text-base">
                        {subtotal.formatted_with_symbol}
                    </h4>
                </div>
            </div>
        </div>
    );
}

export default Subtotal;