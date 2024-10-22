import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";

let names = [
    'Dr. Vinay Kumar',
    "Prof. Santha Kumari",
    "Prof. Santha Kumari",
    "Dr. Sheikh Adil Edrisi",
    "Dr. Jappen Oberoi",
    "Dr. Jappen Oberoi",
    "Dr. Jappen Oberoi"
];

let projects = [
    "Research Data for Wesbite 100% B11 Identification of immunogenic peptide for diagnosis of orthohantavirus infection Identification of immunogenic peptide for diagnosis of orthohantavirus infection",
    "An experimental Investigation of the Psychological determinants of Financial decision making: A prospect theory approach",
    "Factors influencing resilience in children: The mediating role of protective and compensatory factors in coping with adversities.",
    "Sustainability assessment of urban forestry by managing urban marginal lands for developing green space",
    "Red-penciling Ancient Indian History",
    "The Ramayana Project",
    "Reappraising Ashoka"
];

let fundingAgencies = [
    'Department of Science & Technology (DST), Govt. of India and Russian Foundation for Basic Research', 
    "Indian Council of Social Science Research",
    "Indian Council of Social Science Research",
    "Science and Engineering Research Board, Govt. of India (SERB, GoI) New Delhi, India",
    "Tiet Seed Grant",
    "Tslas Research Fund",
    "Tslas Research Fund"
];

let fundingAmounts = [
    '87.29 lakhs',
    "7 lakhs",
    "8 lakhs",
    "25.99 lakhs",
    "6.82 lakhs",
    "4.50 lakhs",
    "3 lakhs"
];

let projectDurations = [
    '2023-2026',
    "2013-2015",
    "2019-2021",
    "December 2021 - December 2023",
    "2023-2025",
    "2022-2025",
    "2022-2025"
];

export default function Researchprojects() {

    let [setTitle, setDesc] = useOutletContext()

    useEffect(() => {
        setTitle("Research Projects")
        setDesc("Empowering the Next Generation of Scientific Leaders: Student-Led Research Projects as a Catalyst for Innovation and Discovery")
    }, [])


    return (
        <>
            {
                names.map((name, index) => (
                    <Publication pub={{facultyname: projects[index], projecttitle: name, funding_agency: fundingAgencies[index], grant_amount: fundingAmounts[index], duration: projectDurations[index] }} />
                ))
            }
        </>
    );
}

function Publication({ pub }) {

    return (
        <div className="pub">
            <h4>{pub.facultyname}</h4>
            <p>{pub.projecttitle}</p>
            <p>Funding Agency : {pub.funding_agency} </p>
            <p> Grant Amount : {pub.grant_amount}</p>
            <p> Duration : {pub.duration} </p>
        </div>
    )

}