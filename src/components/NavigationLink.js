import React from "react";
import { NavContext } from "../context/nav-context-and-provider";
import { navigateTo } from "../misc/misc";

const NavigationLink = ({ navLinkId, scrollToId }) => {
    const { activeNavLinkId } = React.useContext(NavContext);

    return (
        <span
            id={navLinkId}
            className={activeNavLinkId == navLinkId ? "activeLink" : ""}
            onClick={() => navigateTo(scrollToId)}
        >
            {navLinkId}
        </span>
    );
};

export default NavigationLink;
