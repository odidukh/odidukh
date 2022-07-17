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
                    Hi :) I am a front-end developer with 4 years of experience
                    in
                    <br />
                    implementing various web solutions and creating mobile apps
                    <br />
                    using different frameworks and website designs. Strong
                    creative
                    <br />
                    and analytical skills. Team player with an eye for detail.
                </p>
                <button className="letsTalkButton" onClick={handleClick}>
                    Let's Talk
                </button>
            </div>
        </div>
    );
};

export default About;
