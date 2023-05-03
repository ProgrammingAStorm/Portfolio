import { IArticleProps } from "../Article";

class SectionData {
    header: string;
    subHeaders: string[];
    payload: IArticleProps;

    constructor(header: string, subheaders: string[], payload: IArticleProps) {
        this.header = header;
        this.subHeaders = subheaders;
        this.payload = payload
    }
}

const frontendData = new SectionData(
    "Frontend",
    ['React, ', 'Bootstrap, ', 'Tailwind, ', '& More!'],
    {
        text: ["article", "article", "article"]
    }
);

const backendData = new SectionData(
    "Backend",
    ['Express, ', '.NET, ', 'NoSQL, ', '& More!'],
    {
        text: ["article", "article", "article"]
    }
);

const fullstackData = new SectionData(
    "Fullstack",
    ['MERN, ', 'ASP.NET, ', 'Heroku, ', '& More!'],
    {
        text: ["article", "article", "article"]
    }
);

export {
    frontendData,
    backendData,
    fullstackData
}