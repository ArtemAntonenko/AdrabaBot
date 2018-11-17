const fs = require('fs');
const JosephPhoto = fs.readFileSync('./assets/management/Joseph.png');
const YuliaPhoto = fs.readFileSync('./assets/management/Yulia.png');
const TanyaPhoto = fs.readFileSync('./assets/management/Tanya.png');
const AlbinaPhoto = fs.readFileSync('./assets/management/Albina.png');
const AriPhoto = fs.readFileSync('./assets/management/Ari.png');


module.exports = {
    CEO: {
        photo: JosephPhoto,
        about: `<b>Joseph Roash</b> \n<b>CEO & Founder</b> \nJoseph brings more than 18 years
            of software development and project management experience to his leadership role at Adraba. 
            From being a co-founder of Leverate, a leading provider of software and financial solutions
            to the online forex industry, to becoming the R&D Site Manager and taking projects from
            inception to deployment, to being an Honor alumni of the IDF Mamram Programming Course
            and having served in an elite unit of the Israeli Intelligence Services, Joseph brings
            to Adraba more than 18 years of software development and project management experience.`
    },
    COO: {
        photo: YuliaPhoto
    },
    HRDirector: {
        photo: TanyaPhoto
    },
    HeadOfProjects: {
        photo: AlbinaPhoto
    },
    Advisor: {
        photo: AriPhoto
    }
}