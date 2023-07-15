'use client'

import { Dropdown } from 'flowbite-react';
import { Bars3Icon } from '@heroicons/react/24/solid'
import NavLink from './NavLink';

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

const NavbarMobileMenu = () => {
    return (
        <div className='block lg:hidden'>
            <Dropdown className='' 
                color='white'
                
                arrowIcon={false} 
                label={
                    <Bars3Icon className='h-8 w-8 mr-4' />
                }>
                
                {navigationLinks.map(({ name, link }) => (
                    <Dropdown.Item key={name}>
                        <NavLink href={link} className="uppercase hover:text-[#d6bb3f] px-3">
                            {name}
                        </NavLink>
                    </Dropdown.Item>
				))}
			</Dropdown>
        </div>
    );
}

export default NavbarMobileMenu;