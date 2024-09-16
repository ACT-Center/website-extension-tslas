import './card.css'
import { Outlet, Link } from "react-router-dom";


export default function Card({id , heading , title, num, link})
{
    return (
        <div className="homeCard" id={id}>
            <h3>{heading}</h3>
            <button>
                <Link to={link}>
                    Learn More
                </Link>
            </button>
        </div>
    );
}