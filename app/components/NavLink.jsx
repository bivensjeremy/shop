import Link from "next/link";

const NavLink = ({ href, children, className}) => {
    return (
        <Link href={href}>
            <button className={className}>
                {children}
            </button>
        </Link>
    );
}

export default NavLink;