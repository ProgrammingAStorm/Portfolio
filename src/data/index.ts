export default class SectionData {
    header: string;
    subHeaders: string[];

    constructor(header: string, subheaders: string[])
    {
        this.header = header;
        this.subHeaders = subheaders;
    }
}

const frontendData = new SectionData("Frontend", ['React', 'Bootstrap', 'Tailwind', 'More']);

const backendData = new SectionData("Backend", ['Express', '.NET', 'NoSQL', 'More']);

const fullstackData = new SectionData("Fullstack", ['MERN', 'ASP.NET', 'Heroku', 'More']);

export {
    frontendData,
    backendData,
    fullstackData
}