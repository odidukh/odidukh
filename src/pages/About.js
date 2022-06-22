import React from "react";
import picOfMe from "../img/me.jpeg";

const About = () => {
    return (
        <div className="aboutPage">
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
            </div>
        </div>
    );
};

export default About;
