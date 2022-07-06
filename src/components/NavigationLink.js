import React from "react";

const NavigationLink = ({
    navLinkId,
    scrollToId,
    activeNavLinkId,
    setActiveNavLinkId,
}) => {
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
