import NavLink from "./NavLink"
import Image from 'next/image';
import Link from 'next/link';
import Facebook from '../../public/stock/facebook.svg'
import Twitter from '../../public/stock/twitter.svg'
import Instagram from '../../public/stock/instagram.svg'
import Linkedin from '../../public/stock/linkedin.svg'
import Github from '../../public/stock/github.svg'
import Mail from '../../public/stock/mail.svg'

const footerData = [
    {
        id: 1,
        link: 'https://www.facebook.com/bivens.jeremy',
        image: Facebook,
        alt: 'Facebook Icon',
    },
    {
        id: 2,
        link: 'https://www.twitter.com/_Bivens',
        image: Twitter,
        alt: 'Twitter Icon',
    },
    {
        id: 3,
        link: 'https://wwww.instagram.com/bivensjeremy',
        image: Instagram,
        alt: 'Instagram Icon',
    },
    {
        id: 4,
        link: 'https://www.linkedin.com/in/bivensjeremy',
        image: Linkedin,
        alt: 'LinkedIn Icon',
    },
    {
        id: 5,
        link: 'https://www.github.com/bivensjeremy',
        image: Github,
        alt: 'GitHub Icon',
    },
    {
        id: 6,
        link: 'mailto:admin@bivensblueprint.com?subject=Email From Website',
        image: Mail,
        alt: 'Mail Icon',
    },
]

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
        <footer id="Footer" className="text-center">
            <div className="pt-12">
                <div className="mb-6 flex justify-center">
                    {footerData.map(
                        footerLinkIcon
                    )}
                </div>
            </div>


                <div>
                    <p className="uppercase text-xs">
                        <a target="_blank" href="https://icons8.com/icon/yDvdNSDLpjkn/shop">Shop</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                    </p>
                    
                    <p className='uppercase text-xs'>
                        designed for <a className="text-primary" href="https://bivensblueprint.com">Bivens Blueprint, LLC</a> &copy; {new Date().getFullYear()}  
                    </p>
                </div>
</footer>
    );
}

export default Footer;