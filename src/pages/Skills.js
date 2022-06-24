import React from "react";

const Skills = () => {
    return (
        <div className="skillsPage">
            <div className="skillsDescription">
                <h1>Skillset</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <div className="skillsTypesList">
                <div className="skillsTypeListItem">
                    <h3 className="skillsTypeListName">Development Skills</h3>
                    <ul className="skillsList">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                        <li>Redux</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MongoDB</li>
                    </ul>
                </div>
                <div className="skillsTypeListItem">
                    <h3 className="skillsTypeListName">
                        Project Managing Skills
                    </h3>
                    <ul className="skillsList">
                        <li>Git</li>
                        <li>Github</li>
                        <li>Jira</li>
                    </ul>
                </div>
                <div className="skillsTypeListItem">
                    <h3 className="skillsTypeListName">Personal Skills</h3>
                    <ul className="skillsList">
                        <li>Creative</li>
                        <li>Analytical</li>
                        <li>Team Player</li>
                        <li>Tennis</li>
                        <li>Motobike</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Skills;
