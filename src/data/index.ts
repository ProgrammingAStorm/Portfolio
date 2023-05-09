import { IArticleProps } from "../Article";

class SectionData {
    header: string;
    subHeaders: string[];
    payload: IArticleProps[];

    constructor(header: string, subheaders: string[], payload: IArticleProps[]) {
        this.header = header;
        this.subHeaders = subheaders;
        this.payload = payload
    }
}

const frontendData = new SectionData(
    "Frontend",
    ['React, ', 'Bootstrap, ', 'Tailwind, ', '& More!'],
    [
        {
            title: "Flutter Portfolio",
            tech: [
                "Flutter",
                "Dart"
            ],
            image: "./flutter.png",
            deployment: "https://programmingastorm.xyz/#/",
            github: "https://github.com/ProgrammingAStorm/Flutter-Portfolio/tree/main"
        },
        {
            title: "Resume Template",
            tech: [
                "React",
                "Tailwind",
                "Typescript",
                "Vite"
            ],
            image: "./resume-template.png",
            deployment: "https://programmingastorm.github.io/Resume-Template/",
            github: "https://github.com/ProgrammingAStorm/Resume-Template"
        },
        {
            title: "FurEverHome",
            tech: [
                "Bulma",
                "Javascript",
            ],
            image: "./fureverhome.png",
            deployment: "https://programmingastorm.github.io/FurEverHome/",
            github: "https://github.com/ProgrammingAStorm/FurEverHome"
        }
    ]
);

const backendData = new SectionData(
    "Backend",
    ['Express, ', '.NET, ', 'NoSQL, ', '& More!'],
    [
        {
            title: "Social Network API",
            tech: [
                "Node",
                "Express",
                "Sequelize",
                "MySQL"
            ],
            image: "./default.jpg",
            deployment: null,
            github: "https://github.com/ProgrammingAStorm/SocialNetworkAPI",
        },
        {
            title: "E-commerce Backend",
            tech: [
                "Node",
                "Express",
                "Sequelize",
                "MySQL"
            ],
            image: "./default.jpg",
            deployment: null,
            github: "https://github.com/ProgrammingAStorm/E-commerce_Backend",
        },
        {
            title: "Express Note Taker",
            tech: [
                "Node",
                "Express",
                "Sequelize",
                "MySQL"
            ],
            image: "./default.jpg",
            deployment: "https://aqueous-basin-90599.herokuapp.com/",
            github: "https://github.com/ProgrammingAStorm/Express-Note-Taker",
        },
    ]
);

const fullstackData = new SectionData(
    "Fullstack",
    ['MERN, ', 'ASP.NET, ', 'Heroku, ', '& More!'],
    [
        {
            title: 'Instaclone',
            tech: [
                "React.js",
                "Express.js",
                "MongoDB",
                "Mongoose",
                "Heroku"
            ],
            image: "./instaclone.png",
            deployment: "https://instaclonev2.herokuapp.com/",
            github: "https://github.com/VN135766/Instaclone-"
        },
        {
            title: 'MegaTechBlog',
            tech: [
                "Handlebars",
                "Express.js",
                "MySQL",
                "Sequelize",
                "Bulma",
                "Heroku"
            ],
            image: "./megatechblog.png",
            deployment: "https://sheltered-fortress-04150.herokuapp.com/",
            github: "https://github.com/ProgrammingAStorm/MegaTechBlog"
        },
        {
            title: 'Rippit',
            tech: [
                "Bootstrap",
                "Express.js",
                "MySQL",
                "Sequelize",
                "Three.js",
                "Heroku"
            ],
            image: "./rippit.png",
            deployment: "https://vast-mesa-06136.herokuapp.com/",
            github: "https://github.com/ProgrammingAStorm/rippit"
        }
    ]
);

export {
    frontendData,
    backendData,
    fullstackData
}