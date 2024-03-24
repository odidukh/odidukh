import TwitterIcon from "./img/icons/twitter.svg";
import GithubIcon from "./img/icons/github.svg";
import LinkedInIcon from "./img/icons/linkedin.svg";

export const CV_URL = 'https://drive.google.com/file/d/1-XtTK_jlpIgsY88b3jPxjW8WMla8e_ei/view?usp=sharing';

export const mobileScreenWidth = 640;

export const social = [
    {
        name: "Twitter",
        url: "https://twitter.com/OlesDidukh",
        icon: TwitterIcon,
    },
    {
        name: "Github",
        url: "https://github.com/odidukh",
        icon: GithubIcon,
    },
    {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/oles-didukh-2007a8238/",
        icon: LinkedInIcon,
    },
];


export const SKILLS_SET = [
    {
        id: 1,
        type: 'Programming Languages',
        skills: [
            {
                name: 'JavaScript',
                level: 'Expert',
                experience: '5 years',
            },
            {
                name: 'TypeScript',
                level: 'Advanced',
                experience: '3 years',
            },
            {
                name: 'HTML5',
                level: 'Expert',
                experience: '5 years',
            },
            {
                name: 'CSS3',
                level: 'Expert',
                experience: '5 years',
            },
            {
                name: 'SASS/SCSS',
                level: 'Expert',
                experience: '5 years',
            },
        ],
    },
    {
        id: 2,
        type: 'Frameworks & Libraries',
        skills: [
            {
                name: 'React',
                level: 'Expert',
                experience: '5 years',
            },
            {
                name: 'Redux',
                level: 'Advanced',
                experience: '4 years',
            },
            {
                name: 'React Router',
                level: 'Expert',
                experience: '5 years',
            },
            {
                name: 'Material-UI',
                level: 'Expert',
                experience: '5 years',
            },
            {
                name: 'Bootstrap',
                level: 'Expert',
                experience: '5 years',
            },
            {
                name: 'jQuery',
                level: 'Advanced',
                experience: '4 years',
            },
        ],
    },
    {
        id: 3,
        type: 'Tools & Methodologies',
        skills: [
            {
                name: 'Jira',
                level: 'Advanced',
                experience: '4 years',
            },
            {
                name: 'Figma',
                level: 'Advanced',
                experience: '4 years',
            },
            {
                name: 'Agile (Scrum, Kanban)',
                level: 'Expert',
                experience: '5 years',
            },
        ],
    },
    {
        id: 4,
        type: 'Personal Skills',
        skills: [
            {
                name: 'Teamwork',
                level: 'Expert',
                experience: '5 years',
            },
            {
                name: 'Communication',
                level: 'Expert',
                experience: '5 years',
            },
            {
                name: 'Problem-Solving',
                level: 'Expert',
                experience: '5 years',
            },
            {
                name: 'Time Management',
                level: 'Expert',
                experience: '5 years',
            },
        ],
    },
];


export const navLinks = [
    {
        navLinkId: "Home",
        scrollToId: "homePage",
    },
    {
        navLinkId: "About",
        scrollToId: "aboutPage",
    },
    {
        navLinkId: "Skills",
        scrollToId: "skillsPage",
    },
    {
        navLinkId: "Contact",
        scrollToId: "contactPage",
    },
];
