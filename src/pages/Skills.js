import React from 'react';
import { content } from '../content/content';
import { useNav } from '../hooks/useNav';
import { CV_URL } from '../constants';
import { SKILLS_SET } from '../constants';

const ListOfScills = ({ type }) => {
    return (
        <div className="skillsType" key={type.type}>
            <h2 className="skillsTypeName">{type.type}</h2>
            <ul className="skillsList">
                {type.skills.map((skill) => {
                    return (
                        <li key={skill.name} className="skillItem">
                            <span className="skillNameWithLevel">
                                <span className="skillName">{skill.name}</span>
                                <span className="skillLevel">
                                    {skill.level}
                                </span>
                            </span>
                            <span className="skillExperience">
                                {skill.experience}
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

const Skills = () => {
    const skillsRef = useNav('Skills');

    const dowloadCV = () => {
        window.open(CV_URL, '_blank');
    };

    return (
        <div className="skillsPage" id="skillsPage" ref={skillsRef}>
            <div className="skillsDescription">
                <h1>Skillset</h1>
                <p>{content.skills}</p>
            </div>
            <div className="skillsBox">
                {SKILLS_SET.map((skillSet) => {
                    return <ListOfScills type={skillSet} key={skillSet.id} />;
                })}
            </div>

            <button className="cvButton" onClick={dowloadCV}>
                Download CV
            </button>
        </div>
    );
};

export default Skills;
