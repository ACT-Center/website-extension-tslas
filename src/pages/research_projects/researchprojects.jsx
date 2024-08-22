import "./projects.css"

let names = [
    "Prof Santha Kumari",
    "Prof Santha Kumari",
    "Sheikh Adil Edrisi",
    "Jappen Oberoi",
    "Jappen Oberoi",
    "Jappen Oberoi"
];

let projects = [
    "An experimental Investigation of the Psychological determinants of Financial decision making: A prospect theory approach, Sponsoring Agency: ICSSR, Duration: 2013-2015, Status: Completed.",
    "Santha Kumari (2019). Factors influencing resilience in children: The mediating role of protective and compensatory factors in coping with adversities. Funding Agency ICSSR (Indian Council of Social Science Research. 8 Lakhs Completed.",
    "Sustainability assessment of urban forestry by managing urban marginal lands for developing green space",
    "Red-penciling Ancient Indian History",
    "The Ramayana Project",
    "Reappraising Ashoka"
];

let fundingAgencies = [
    "Indian Council of Social Science Research",
    "Indian Council of Social Science Research",
    "Science and Engineering Research Board, Govt. of India (SERB, GoI) New Delhi, India",
    "Tiet Seed Grant",
    "Tslas Research Fund",
    "Tslas Research Fund"
];

let fundingAmounts = [
    "7 lakhs",
    "8 lakhs",
    "25.99 lakhs",
    "6.82 lakhs",
    "4.50 lakhs",
    "3 lakhs"
];

let projectDurations = [
    "2013-2015",
    "2019-2021",
    "December 2021 - December 2023",
    "2023-2025",
    "2022-2025",
    "2022-2025"
];

let projectDescriptions = [null, null,null,
    "The project purports to amend the nonfactual erraticism and vexing convulsions in the political history of Ancient India which has huge ramifications even in the present day and present the most plausible story of the early period of Indian history.",
    "To comprehend the popularity of the text across multiple epochs.",
    "To correct the mistranslations of the Ashokan edicts and string together a sequential narrative of Ashoka’s life, with special attention paid to understanding the man beneath the crown."
];

export default function Researchprojects() {
    return (
        <div className="projects">

            <h1>Research Projects</h1>
            {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p> */}

            <ol>
               {
                names.map((name, index) => (
                    <li><Publication pub={{facultyname: name, projecttitle: projects[index], funding_agency: fundingAgencies[index], grant_amount: fundingAmounts[index], duration: projectDurations[index] , project_description : projectDescriptions[index]}} /></li>
                ))
               }
            </ol>

        </div>
    );
}

function Publication({ pub }) {

    return (
        <div className="pub">
            <h4>{pub.facultyname}</h4>
            <p>Project Title :- {pub.projecttitle}</p>
            <p>Funding Agency :- {pub.funding_agency} </p>
            <p> Grant Amount :- {pub.grant_amount}</p>
            <p> Duration :- {pub.duration} </p>
            <p> Project Description :- {pub.project_description}</p>

        </div>
    )

}