import React from "react";
import { NavContext } from "../context/nav-context-and-provider";

const NavigationLink = ({ navLinkId, scrollToId }) => {
    const { activeNavLinkId, setActiveNavLinkId } =
        React.useContext(NavContext);
    const handleClick = () => {
        setActiveNavLinkId(navLinkId);

        const element = document.getElementById(scrollToId);
        element.scrollIntoView({
            behavior: "smooth",
        });
    };
    return (
        <span
            id={navLinkId}
            className={activeNavLinkId == navLinkId ? "activeLink" : ""}
            onClick={handleClick}
        >
            {navLinkId}
        </span>
    );
};

export default NavigationLink;
