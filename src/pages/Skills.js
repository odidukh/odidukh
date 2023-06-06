import React from 'react';
import { content } from '../content/content';
import { useNav } from '../hooks/useNav';
import { CV_URL } from '../constants';

const SKILLS_SET = [
    {
        type: 'Development Skills',
        skills: [
            'HTML',
            'CSS',
            'JavaScript',
            'React',
            'Redux',
            'Node',
            'Express',
            'MongoDB',
        ],
    },
    {
        type: 'Project Managing Skills',
        skills: ['Git', 'Github', 'Jira'],
    },
    {
        type: 'Personal Skills',
        skills: ['Creative', 'Analytical', 'Team Player', 'Adaptable'],
    },
];

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
                    return (
                        <div className="skillType" key={skillSet.type}>
                            <h2 className="skillTypeName">{skillSet.type}</h2>
                            <ul className="skillsList">
                                {skillSet.skills.map((skill) => {
                                    return (
                                        <li key={skill} className="skillItem">
                                            {skill}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
            </div>

            <button className="cvButton" onClick={dowloadCV}>
                Download CV
            </button>
        </div>
    );
};

export default Skills;
