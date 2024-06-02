import Image from 'next/image';
import Link from 'next/link';
import { footerData } from "../data/footerData";



const footerLinkIcon = ({ id, link, image, alt }) => {
    return(
        <Link key={id} href={link} className="m-2 h-8 w-8 lg:h-8 lg:w-8 rounded-full border border-white uppercase leading-normal text-neutral transition duration-150 ease-in-out hover:bg-primary">
            <Image 
                src={image}
                alt={alt}
                className="mx-auto h-full w-4"
            />
        </Link>
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