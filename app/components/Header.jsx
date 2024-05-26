import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import { navigationLinks } from "../data/navigationLinks";
import { ImCart } from "react-icons/im";
import HeaderDropdown from "./HeaderDropdown";
import ShoppingCart from "./ShoppingCart";

export default function Header() {
    return (
        <Navbar className="bg-secondary/60 text-default" maxWidth="full" shouldHideOnScroll>
            <NavbarContent justify="start">
                <NavbarItem className="flex sm:hidden">
                    <HeaderDropdown />
                </NavbarItem>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {navigationLinks.map(({ name, link }) => (
                    <NavbarItem key={name}>
                        <Button as={Link} href={link} variant="light" className="uppercase text-default">
                            {name}
                        </Button>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <ShoppingCart />
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
