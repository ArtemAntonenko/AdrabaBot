const fs = require('fs');
const JosephPhoto = fs.readFileSync('./assets/management/Joseph.png');
const YuliaPhoto = fs.readFileSync('./assets/management/Yulia.png');
const TanyaPhoto = fs.readFileSync('./assets/management/Tanya.png');
const AlbinaPhoto = fs.readFileSync('./assets/management/Albina.png');
const AriPhoto = fs.readFileSync('./assets/management/Ari.png');

module.exports = {
    CEO: {
        photo: JosephPhoto,
        about: '<b>Joseph Roash</b> \n<b>CEO & Founder</b> \nJoseph brings more than 18 years of software development and project management experience to his leadership role at Adraba. From being a co-founder of Leverate, a leading provider of software and financial solutions to the online forex industry, to becoming the R&D Site Manager and taking projects from inception to deployment, to being an Honor alumni of the IDF Mamram Programming Course and having served in an elite unit of the Israeli Intelligence Services, Joseph brings to Adraba more than 18 years of software development and project management experience.'
    },
    COO: {
        photo: YuliaPhoto,
        about: `<b>Yulia Martynova</b> \n<b>COO</b> \nAs COO of Adraba, Yulia is responsible of overseeing various departments within the company, from marketing and customer support to administration. Throughout her career, Yulia has helped some of the world’s most prominent businesses find the best resources available in Ukraine, in order for them to establish and optimize their businesses. In her spare time, Yulia puts her London College of Fashion degree to good use by giving lectures to some of the top retailers in Ukraine.`
    },
    HRDirector: {
        photo: TanyaPhoto,
        about: `<b>Tanya Shevchuk</b> \n<b>HR Director</b> \nTanya offers 7 years of experience in the direction of HR and business development. The main areas of activity are analysis, construction and implementation of the personnel management system; analysis and implementation of business processes; development and implementation of corporate culture. Also has a successful experience as HR and business development Advisor in leading companies in such areas as: manufacturing, retail, agro-trading, fuel industry and others.`
    },
    HeadOfProjects: {
        photo: AlbinaPhoto,
        about: `<b>Albina Kravchenko</b> \n<b>Head of Projects</b> \nResponsible for Delivery. About 10 years in software development in leading companies. The experience in Quality, Development and Project Management areas allows to lead continuous improvements of projects production. Certified as Project Management Professional by Project Management Institute.`
    },
    Advisor: {
        photo: AriPhoto,
        about: `<b>Ari Shpanya</b> \n<b>Advisor</b> \nCo-founder at Zent.com and HomeShare.com, Previously founder and CEO at Wiser.com- an enterprise focused SaaS which grew from scratch to serve hundreds of customers. He is a guest blogger and been featured on Econsultancy, VentureBeat and Forbes. Ari holds a LL.B. (Magna Cum Laude) in Legal Studies from IDC Herzliya and is graduate of the Stanford Ignite program at the Stanford University Graduate School of Business.`
    }
}