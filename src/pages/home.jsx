import Card from "../components/card/card";

export default function Home() {

    console.log("home");

    return (
        <div style={{display : "flex"}}>
            <Card section="mainsec1"/>
            <Card section="mainsec2"/>
            <Card section="mainsec3"/>
            <Card section="mainsec4"/>
        </div>
    );
}