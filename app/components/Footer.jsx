import NavLink from "./NavLink"
import Image from 'next/image';
import Link from 'next/link';
import { footerData } from "../database/footerData";

const footerLinkIcon = ({ id, link, image, alt }) => {
    return(
        <NavLink key={id} href={link} className="m-2 h-8 w-8 lg:h-14 lg:w-14 rounded-full border border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0">
            <Image 
                src={image}
                alt={alt}
                className="mx-auto h-full w-7"
            />
        </NavLink>
    )
}

const Footer = () => {
    return (
        <footer id="Footer" className="footer footer-center bg-accent">
            <div className="pt-12">
                <div className="flex justify-center">
                    {footerData.map(
                        footerLinkIcon
                    )}
                </div>
            </div>

            <div>
                <p className='uppercase text-xs text-neutral'>
                    designed for &copy; {new Date().getFullYear()} <Link className="text-primary" href="https://bivensblueprint.com">Bivens Blueprint, LLC</Link>  
                </p>
            </div>
        </footer>
    );
}

export default Footer;