import React from "react";
import { content } from "../content/content";
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
                <p>{content.aboutMe}</p>
                <button className="letsTalkButton" onClick={handleClick}>
                    Let's Talk
                </button>
            </div>
        </div>
    );
};

export default About;
