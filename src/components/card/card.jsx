import './card.css'
import { Outlet, Link, useNavigate } from "react-router-dom";


export default function Card({id , heading , link})
{   

    const navigator = useNavigate()
    function clickHandler(){
        navigator(link)
    }

    return (
        <div className="homeCard" id={id} onClick={clickHandler}>
            <h3>{heading}</h3>
        </div>
    );
}