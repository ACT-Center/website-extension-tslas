import Card from "../../components/card/card";
import './home.css'; 
export default function Home() {

    console.log("home");

    return (
        <div className="home">
            <Card section="mainsec1" heading="Reasearch Projects" title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "/>
            <Card section="mainsec2" heading="Reasearch Projects" title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "/>
            <Card section="mainsec3" heading="Reasearch Projects" title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "/>
            <Card section="mainsec4" heading="Reasearch Projects" title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "/>
        </div>
    );
}