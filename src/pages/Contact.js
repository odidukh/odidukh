import { social } from "../constants";
import React from "react";
import { useNav } from "../hooks/useNav";
import ContactForm from "../components/ContactForm";
import { content } from "../content/content";

const Contact = () => {
    const contactRef = useNav("Contact");
    return (
        <div className="contactPage" id="contactPage" ref={contactRef}>
            <div className="contactDescription">
                <h1>Contact</h1>
                <p>{content.contact}</p>
            </div>
            <div className="emailAndSocialsBlock">
                <div className="emailBlock">
                    <h2 className="blockHeader">I'm Available for Hiring!</h2>
                    <ContactForm />
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
