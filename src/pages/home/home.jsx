import { Link } from "react-router-dom";
import Card from "../../components/card/card";

export default function Home() {

    console.log("home");
    let i = 1;

    return (
        <div className="home">
            <Card num={i++} id="card1" heading="Research Projects" title="Empowering the Next Generation of Scientific Leaders: Student-Led Research Projects as a Catalyst for Innovation and Discovery"/>
            <Card num={i++} id="card2" heading="Workshops & Conferences" title="Access Exclusive, Cutting-Edge Insights: Unlock the Latest Research and Industry Trends to Drive Innovation"/>
            <Card num={i++} id="card3" heading="Publications & Papers" title="Join the Conversation: Advance Academic Discourse and Contribute to a Growing Body of Global Knowledge"/>
            <Card num={i++} id="card4" heading="Research Talks" title="Learn from the World's Most Accomplished Researchers, Visionary Innovators, and Trailblazing Industry Leaders to Achieve Your Full Potential"/>
        </div>
    );
}