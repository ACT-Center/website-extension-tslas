<<<<<<< HEAD
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

=======
import { useOutletContext } from "react-router-dom";
import workData from "./data.js";
import { useEffect } from "react";
>>>>>>> aa78c7ce99f83c0ab867b3d3a33b5cc8fe010a17

export default function Workshop() {

    let [setTitle, setDesc] = useOutletContext()

    useEffect(() => {
        setTitle("Workshops & Conferences")
        setDesc("Access Exclusive, Cutting-Edge Insights: Unlock the Latest Research and Industry Trends to Drive Innovation")
    }, [])

    return (
        <div>
            <div className="projects">

<<<<<<< HEAD
                <h1>Workshop & Conference Organized</h1>
                {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p> */}

                <ol>
                    {
                        conferenceDetailsList.map((e,index)=>(
                            <li><Publication pub={{facultyname : e.facultyName , location : e.location , date : e.date , conference : e.conferenceDetails , website : e.website}}/></li>
                        ))
                    }
                </ol>
=======
                <h1>Workshops</h1>

                {
                    workData.map((work) => (
                        <Works pub={work}/>
                    ))
                }
>>>>>>> aa78c7ce99f83c0ab867b3d3a33b5cc8fe010a17

            </div>
        </div>
    );
}

<<<<<<< HEAD
function Publication({ pub }) {

    return (
        <div className="pub">
            <h4>{pub.facultyname}</h4>
            <p>Location :- {pub.location} , Date :- {pub.date} </p>
            <p>Details of the conference :- {pub.conference}</p>
            {pub.website == '' ? null : <a href={pub.website} target="blank">Website</a>}
=======

function Works({pub}){

    return(
        <div className="pub">
            <h4>{pub.Title}</h4>
            <p>By: {pub.FacultyName}</p>
            <p>{pub.Organizer}, {pub.Location} </p>
            {/* <p>{pub.Description}</p> */}
>>>>>>> aa78c7ce99f83c0ab867b3d3a33b5cc8fe010a17
        </div>
    )

}