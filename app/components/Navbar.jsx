import { ShoppingBagIcon, Bars3Icon } from '@heroicons/react/24/solid'
import NavLink from './NavLink';
import ShoppingCartNav from './(store)/ShoppingCartNav';

const navigationLinks =  [
	{
		name: 'Home',
		link: '/'
	},
	{
		name: 'Shop',
		link: '/shop',
	},
	{
		name: 'About',
		link: '/about',
	},
	{
		name: 'FAQs',
		link: '/frequentlyaskedquestions',
	},
]

const Navbar = () => {
	return (
		// <!-- Main navigation container -->
		<nav className="flex-no-wrap top-0 flex w-full items-center justify-between py-6 bg-[#3C486B]/50 relative shadow-md shadow-black/5  lg:flex-wrap lg:justify-start" data-te-navbar-ref>
			<div className="flex w-full flex-wrap items-center justify-between px-3">
			{/* <!-- Hamburger button for mobile view --> */}
				<button className="block lg:hidden"
					type="button"
					data-te-collapse-init
					data-te-target="#navbarSupportedContent1"
					aria-controls="navbarSupportedContent1"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					{/* <!-- Hamburger icon --> */}
					<Bars3Icon className="h-8 w-8 mr-4" />
				</button>

				{/* <!-- Collapsible navigation container --> */}
				<div className="!visible hidden flex-grow items-center lg:!flex" id="navbarSupportedContent1" data-te-collapse-item>
					<ul className="list-style-none mx-auto flex flex-col lg:flex-row" data-te-navbar-nav-ref>
						{navigationLinks.map(({ name, link }) => (
							<li key={name} className="mx-4" data-te-nav-link-ref>
								<NavLink href={link} className="uppercase hover:text-[#d6bb3f]">
									{name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				{/* <!-- Right elements --> */}
				<div className="relative flex items-center">
					<NavLink href='/checkout/cart' >
						<ShoppingBagIcon className="h-6 w-6 mr-4 hover:text-[#d6bb3f] focus:text-[#d6bb3f]" />
						<ShoppingCartNav />
					</NavLink>
				</div>
			</div>
		</nav>
    );
}

export default Navbar;