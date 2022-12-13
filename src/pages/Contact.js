import { social } from '../constants';
import React, { useState } from 'react';
import { useNav } from '../hooks/useNav';
import ContactForm from '../components/ContactForm';
import { content } from '../content/content';
import ThanksForMailBlock from '../components/ThanksForMailBlock';

const Contact = () => {
    const [isMailSent, setIsMailSent] = useState(false);
    const contactRef = useNav('Contact');
    const changeMailIsSent = () => setIsMailSent(!isMailSent);

    const emailBlock = (
        <div className="emailBlock">
            <h2 className="blockHeader">I'm Available for Hiring!</h2>
            {isMailSent ? (
                <ThanksForMailBlock changeMailIsSent={changeMailIsSent} />
            ) : (
                <ContactForm changeMailIsSent={changeMailIsSent} />
            )}
        </div>
    );

    const socialBlock = (
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
    );

    return (
        <div className="contactPage" id="contactPage" ref={contactRef}>
            <div className="contactDescription">
                <h1>Contact</h1>
                <p>{content.contact}</p>
            </div>
            <div className="emailAndSocialsBlock">
                {emailBlock}
                {socialBlock}
            </div>
        </div>
    );
};

export default Contact;
