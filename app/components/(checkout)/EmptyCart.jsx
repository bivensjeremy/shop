import NavLink from "../NavLink";

const EmptyCart = () => {
    return (
        <div className="m-auto text-center">
            <div className="py-8">
                Your cart is empty.
            </div>
            
            <NavLink href="/shop" className="btnCSS">
                Store
            </NavLink>
        </div>
    );
}

export default EmptyCart;