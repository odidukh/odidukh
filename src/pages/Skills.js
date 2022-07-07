import React from "react";

const SKILLS_SET = [
    {
        type: "Development Skills",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node",
            "Express",
            "MongoDB",
        ],
    },
    {
        type: "Project Managing Skills",
        skills: ["Git", "Github", "Jira"],
    },
    {
        type: "Personal Skills",
        skills: ["Creative", "Analytical", "Team Player", "Adaptable"],
    },
];

const Skills = () => {
    return (
        <div className="skillsPage" id="skillsPage">
            <div className="skillsDescription">
                <h1>Skillset</h1>
                <p>
                    Able to work with a variety of technologies and frameworks.
                    <br />
                    Participated in a development of project of different sizes.
                    <br />
                    Developed both SPAs and mobile apps.
                    <br />
                    Proven ability to learn a custom frameworks and libraries.
                    <br />
                </p>
            </div>
            <div className="skillsBox">
                {SKILLS_SET.map((skillSet) => {
                    return (
                        <div className="skillType" key={skillSet.type}>
                            <h2 className="skillTypeName">{skillSet.type}</h2>
                            <ul className="skillsList">
                                {skillSet.skills.map((skill) => {
                                    return (
                                        <li className="skillItem">{skill}</li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Skills;
