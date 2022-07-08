import { useContext, useEffect, useRef } from "react";
import { NavContext } from "../context/nav-context-and-provider";
import { useOnScreen } from "./useOnScreen";

export const useNav = (navLinkId) => {
    const ref = useRef(null);

    const { setActiveNavLinkId } = useContext(NavContext);
    const isOnScreen = useOnScreen(ref);

    useEffect(() => {
        if (isOnScreen) {
            setActiveNavLinkId(navLinkId);
        }
    }, [isOnScreen, navLinkId, setActiveNavLinkId]);

    return ref;
};
