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
                    <form action="" className="emailForm">
                        <label htmlFor="email">Your Name</label>
                        <input type="text" placeholder="Your Name" />
                        <label htmlFor="email">Your Email</label>
                        <input type="text" placeholder="Your Email" />
                        <label htmlFor="email">Your Message</label>
                        <textarea
                            name=""
                            id=""
                            cols="30"
                            rows="10"
                            placeholder="Share your Thoughts"
                        />
                        <button type="submit">Send Message</button>
                    </form>
                </div>
                <div className="socialsBlock">
                    <h2>Get Me in Social Networks</h2>
                    <ul>
                        <li>LinkedIn</li>
                        <li>Github</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Contact;
