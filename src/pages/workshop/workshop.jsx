import { useOutletContext } from "react-router-dom";
import workData from "./data.js";
import { useEffect } from "react";

export default function Workshop() {

    let [setTitle, setDesc] = useOutletContext()

    useEffect(() => {
        setTitle("Workshops & Conferences")
        setDesc("Access Exclusive, Cutting-Edge Insights: Unlock the Latest Research and Industry Trends to Drive Innovation")
    }, [])

    return (
        <div>
            <div className="projects">

                <h1>Workshops</h1>

                {
                    workData.map((work) => (
                        <Works pub={work}/>
                    ))
                }

            </div>
        </div>
    );
}


function Works({pub}){

    return(
        <div className="pub">
            <h4>{pub.Title}</h4>
            <p>By: {pub.FacultyName}</p>
            <p>{pub.Organizer}, {pub.Location} </p>
            {/* <p>{pub.Description}</p> */}
        </div>
    )

}