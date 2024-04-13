import { Sling as Hamburger } from "hamburger-react";

const MenuIcon = ({ isOpen, toggleMenu }) => {
    return (
        <div className="absolute right-0 md:hidden hover:opacity-70">
            <Hamburger
                toggled={isOpen}
                toggle={toggleMenu}
                size={32}
                direction="right"
                duration={1}
                color="black"
                rounded
            />
        </div>
    )
}

export default MenuIcon;