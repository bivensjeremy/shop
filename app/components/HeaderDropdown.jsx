'use client'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from "@nextui-org/react";
import { navigationLinks } from "../data/navigationLinks";
import Link from "next/link";
import { ImMenu } from "react-icons/im";

const HeaderDropdown = () => {
    return (
        <Dropdown>
            <DropdownTrigger>
                <Button variant="light" isIconOnly>
                    <ImMenu className="w-5 h-5 text-default" />
                </Button>
            </DropdownTrigger>

            <DropdownMenu aria-label="Static Actions">
                {navigationLinks.map(({ name, link }) => (
                    <DropdownItem key={name} as={Link} href={link}>
                        {name}
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
}

export default HeaderDropdown;