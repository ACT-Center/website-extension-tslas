import Card from "../../components/card/card";
import './publications.css'

export default function Publications()
{
    return (
        <div style={{display : "flex"}}>
         <div className="mainsec1"><Card section="mainsec2" heading="Reasearch Projects" title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "/></div>
         <div className="publications">
        <div className="heading">
        Publications and Papers
        </div>
        <div className="publicationsyearswise">
            <div id="1year" className="years">2019</div>
            <div id="2year" className="years">2019</div>
            <div id="3year" className="years">2019</div>
            <div id="4year" className="years">2019</div>
            <div id="5year" className="years">2019</div>
            <div id="6year" className="years">2019</div>
        </div>
         </div>
        </div>
    );

}