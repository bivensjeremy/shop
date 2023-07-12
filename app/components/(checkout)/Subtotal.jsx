import NavLink from "../NavLink";
import EmptyCartButton from "./EmptyCartButton";

const { default: Spinner } = require("../(store)/Spinner")

const Subtotal = ({ subtotal, checkout }) => {
    if (!subtotal) return <Spinner />
    
    return (
        <div className="flex flex-row justify-evenly">
            
            <EmptyCartButton />

            <NavLink href={checkout} className="btnCSS">
                Checkout
            </NavLink>

        <div>
            <h4 className="text-md">
                Subtotal:
            </h4>
        <h4 className="text-xl">
                {subtotal.formatted_with_symbol}
            </h4>
        </div>
            
        </div>
    );
}

export default Subtotal;