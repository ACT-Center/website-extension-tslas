import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

let conferenceDetailsList = [
    {
        facultyName: "Andrea Raimondi (co-organiser)",
        location: "Thapar",
        date: "2021",
        conferenceDetails: "Thought and Reality Workshop",
        website: ""
    },
    {
        facultyName: "Rabi Prakash",
        location: "India International Centre, New Delhi",
        date: "Jun-24",
        conferenceDetails: "Towards an Alternative Paradigm for Bhakti: Examinations of Bhakti Texts towards its Contexts",
        website: ""
    },
    {
        facultyName: "",  // No faculty name provided
        location: "TIET, Patiala",
        date: "March 27-28, 2014",
        conferenceDetails: "Exploring New Research Avenues: A Conversation among Heterodox Economics Sociology and History.",
        website: ""
    },
    {
        facultyName: "Jappen Oberoi",
        location: "TIET, Patiala",
        date: "March 27-28, 2024",
        conferenceDetails: "Exploring New Research Avenues: A Conversation among Heterodox Economics Sociology and History.",
        website: "https://www.youtube.com/@JappenOberoi/streams"
    }
];

export default function Workshop() {

    let [setTitle, setDesc] = useOutletContext()

    useEffect(() => {
        setTitle("Workshops & Conferences")
        setDesc("Access Exclusive, Cutting-Edge Insights: Unlock the Latest Research and Industry Trends to Drive Innovation")
    }, [])

    return (
        <div>
            <div className="projects">
                <h1>Workshop & Conference</h1>
                {
                    conferenceDetailsList.map((e, index) => (
                        <Publication pub={{ facultyname: e.facultyName, location: e.location, date: e.date, conference: e.conferenceDetails, website: e.website }} />
                    ))
                }
            </div>
        </div>
    );
}

function Publication({ pub }) {
    return (
        <div className="pub">
            <h4>{pub.facultyname}</h4>
            <p>Location: {pub.location} , Date: {pub.date}</p>
            <p>Details of the conference: {pub.conference}</p>
            {/* {pub.website && <a href={pub.website} target="_blank" rel="noopener noreferrer">Website</a>} */}
        </div>
    );
}
