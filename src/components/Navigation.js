import React, { useState } from "react";
import { navLinks } from "../constants";
import NavigationLink from "./NavigationLink";
import MenuIcon from "@mui/icons-material/Menu";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";
import useOutsideClick from "../hooks/useOutsideClick";

const Navigation = () => {
    const isMobile = useCheckMobileScreen();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const ref = useOutsideClick(() => setIsMenuOpen(false));
    return (
        <nav className="navigationBlock" ref={ref}>
            {isMobile && (
                <button
                    className="mobileMenu"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <MenuIcon className="menuIcon" /> Menu
                </button>
            )}
            {((isMobile && isMenuOpen) || !isMobile) &&
                navLinks.map(({ navLinkId, scrollToId }) => (
                    <NavigationLink
                        key={navLinkId}
                        navLinkId={navLinkId}
                        scrollToId={scrollToId}
                        setIsMenuOpen={setIsMenuOpen}
                    />
                ))}
        </nav>
    );
};

export default Navigation;
