import React from "react";
import { useNav } from "../hooks/useNav";
import picOfMe from "../img/me.jpg";
import { navigateTo } from "../misc/misc";

const About = () => {
    const aboutRef = useNav("About");
    function handleClick() {
        navigateTo("contactPage");
    }
    return (
        <div className="aboutPage" id="aboutPage" ref={aboutRef}>
            <img className="picOfMe" src={picOfMe} alt="me" />
            <div className="aboutMeTextBlock">
                <h1>About Me</h1>
                <p>
                    Hello. I'm a front-end developer with an extencive
                    experience in an implemention of various web solutions and
                    creation mobile apps using opensource and proprietary
                    frameworks. Have strong creative and analytical skills. Team
                    player with an eye for details.
                </p>
                <button className="letsTalkButton" onClick={handleClick}>
                    Let's Talk
                </button>
            </div>
        </div>
    );
};

export default About;
