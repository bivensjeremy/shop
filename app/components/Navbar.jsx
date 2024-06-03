import Link from 'next/link';
import { navigationLinks } from '../database/navigationLinks';
import HeaderDropdown from './HeaderDropdown';
import ShoppingCart from './ShoppingCart';

const Navbar = () => {
	return (
		<div className="navbar bg-secondary/60 max-w-full text-neutral fixed z-[10]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <HeaderDropdown />
                    </div>
                </div>
            </div>

            <div className="navbar-center hidden lg:flex gap-4">
                {navigationLinks.map(({ name, link }) => (
                    <div key={name}>
                        <Link role="button" href={link} className='btn btn-ghost uppercase text-default hover:text-primary'>
                            {name}
                        </Link>
                    </div>
                ))}
            </div>

            <div className="navbar-end">
                <ShoppingCart />
            </div>
        </div>
    );
}

export default Navbar;