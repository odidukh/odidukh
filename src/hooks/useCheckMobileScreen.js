import React from "react";
import { mobileScreenWidth } from "../constants";

const useCheckMobileScreen = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const checkMobile = () => {
            if (window.innerWidth <= mobileScreenWidth) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => {
            window.removeEventListener("resize", checkMobile);
        };
    }, []);
    return isMobile;
};

export default useCheckMobileScreen;
