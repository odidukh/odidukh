import React from "react";
import picOfMe from "../img/me.jpg";

const About = () => {
    return (
        <div className="aboutPage" id="aboutPage">
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
                <button className="letsTalkButton">Let's Talk</button>
            </div>
        </div>
    );
};

export default About;
