import Card from "../components/card/card";

export default function Home() {

    console.log("home");

    return (
        <div style={{ display: "flex" }}>
            <Card section="mainsec1" heading="Reasearch Projects" title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "/>
            <Card section="mainsec2" heading="Reasearch Projects" title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "/>
            <Card section="mainsec3" heading="Reasearch Projects" title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "/>
            <Card section="mainsec4" heading="Reasearch Projects" title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "/>
        </div>
    );
}