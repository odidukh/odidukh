import { social } from "../constants";
import React from "react";

const Contact = () => {
    return (
        <div className="contactPage">
            <div className="contactDescription">
                <h1>Contact</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="emailAndSocialsBlock">
                <div className="emailBlock">
                    <h2 className="blockHeader">I'm Available for Hiring!</h2>
                    <form action="" className="emailForm">
                        <input type="text" placeholder="Your Name*" required />
                        <input
                            type="email"
                            placeholder="Your Email*"
                            required
                        />
                        <textarea
                            required
                            name=""
                            id=""
                            cols="30"
                            rows="5"
                            placeholder="Share your Thoughts*"
                        />
                        <button className="submitButton" type="submit">
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="socialsBlock">
                    <h2 className="blockHeader">Get Me in Social Networks</h2>
                    <ul>
                        {social.map((social) => (
                            <li key={social.name}>
                                <a href={social.url}>
                                    <img src={social.icon} alt={social.name} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
