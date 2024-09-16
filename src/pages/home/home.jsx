import Card from "../../components/card/card";
import './home.css'; 
export default function Home() {

    console.log("home");
    let i = 1;

    return (
        <div className="home">
            <Card num={i++} id="card1" link={'./section/projects'} heading="Research Projects"/>
            <Card num={i++} id="card2" link={'./section/workshops'} heading="Workshops & Conferences"/>
            <Card num={i++} id="card3" link={'./section/publications'} heading="Publications"/>
            <Card num={i++} id="card4" link={'./section/talks'} heading="Research Talks"/>
        </div>
    );
}