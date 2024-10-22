import { useEffect } from "react";
import { useOutletContext } from "react-router-dom";

let conferenceDetailsList = [
    {
        facultyName: "Andrea Raimondi",
        location: "Thapar Institute of Engineering and Technology, Patiala",
        date: "June, 2021",
        conferenceDetails: "Thought and Reality Workshop",
        website: ""
    },
    {
        facultyName: "Rabi Prakash",
        location: "India International Centre, New Delhi",
        date: "June, 2024",
        conferenceDetails: "Towards an Alternative Paradigm for Bhakti: Examinations of Bhakti Texts towards its Contexts",
        website: ""
    },
    {
        facultyName: "Jappen Oberoi & Rabi Prakash",
        location: "Thapar Institute of Engineering and Technology, Patiala",
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
        <>
                {
                    conferenceDetailsList.map((e, index) => (
                        <Publication pub={{ facultyname: e.facultyName, location: e.location, date: e.date, conference: e.conferenceDetails, website: e.website }} />
                    ))
                }
        </>
    );
}

function Publication({ pub }) {
    return (
        <div className="pub">
            <h4>{pub.facultyname}</h4>
            <p>Location: {pub.location} <br /> Date: {pub.date}</p>
            <p>{pub.conference}</p>
        </div>
    );
}
