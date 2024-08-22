import { useEffect } from "react";
import workData from "./data.js";
import { useOutletContext } from "react-router-dom";

export default function Researchtalks() {
    let [setTitle, setDesc] = useOutletContext()

    useEffect(() => {
        setTitle("Research Talks")
        setDesc("Learn from the World's Most Accomplished Researchers, Visionary Innovators, and Trailblazing Industry Leaders to Achieve Your Full Potential")
    }, [])

    return (
        <div>
            <div className="projects">

                <h1>Research Talks</h1>

                {
                    workData.map((work) => (
                        <Works pub={work} />
                    ))
                }

            </div>
        </div>
    );
}


function Works({ pub }) {

    return (
        <div className="pub">
            <h4>{pub.Title}</h4>
            <p>By: {pub.FacultyName}</p>
            <p>{pub.Organizer}, {pub.Location} </p>
            {/* <p>{pub.Description}</p> */}
        </div>
    )
}