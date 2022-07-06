import React from "react";
import { navLinks } from "../constants";
import NavigationLink from "./NavigationLink";

const Navigation = () => {
    const [activeNavLinkId, setActiveNavLinkId] = React.useState("");
    return (
        <nav>
            {navLinks.map(({ navLinkId, scrollToId }) => (
                <NavigationLink
                    navLinkId={navLinkId}
                    scrollToId={scrollToId}
                    activeNavLinkId={activeNavLinkId}
                    setActiveNavLinkId={setActiveNavLinkId}
                />
            ))}
        </nav>
    );
};

export default Navigation;
