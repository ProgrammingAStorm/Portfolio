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
            ],
            image: "./flutter.png",
            deployment: "https://programmingastorm.xyz/#/",
            github: "https://github.com/ProgrammingAStorm/Flutter-Portfolio/tree/main"
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
                "Express",
                "Sequelize",
                "MySQL"
            ],
            image: "./default.jpg",
            deployment: null,
            github: "https://github.com/ProgrammingAStorm/SocialNetworkAPI",
        }
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
                "Mongoose"
            ],
            image: "./instaclone.png",
            deployment: "https://instaclonev2.herokuapp.com/",
            github: "https://github.com/VN135766/Instaclone-"
        }
    ]
);

export {
    frontendData,
    backendData,
    fullstackData
}