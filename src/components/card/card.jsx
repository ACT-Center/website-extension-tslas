import './card.css'
import { Outlet, Link } from "react-router-dom";


export default function Card({id , heading , title, num, link})
{
    return (
        <div className="homeCard" id={id}>
            <h1>{0}{num}</h1>
            <h3>{heading}</h3>
            <p>{title}</p>
            <button>
                <Link to={link}>
                    Learn More
                </Link>
            </button>
        </div>
    );
}