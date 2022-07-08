import React from "react";
import { navLinks } from "../constants";
import NavigationLink from "./NavigationLink";

const Navigation = () => {
    return (
        <nav className="navigationBlock">
            {navLinks.map(({ navLinkId, scrollToId }) => (
                <NavigationLink
                    key={navLinkId}
                    navLinkId={navLinkId}
                    scrollToId={scrollToId}
                />
            ))}
        </nav>
    );
};

export default Navigation;
