import './card.css'
export default function Card({id , heading , title, num})
{
    return (
        <div className="homeCard" id={id}>
            <h1>{0}{num}</h1>
            <h3>{heading}</h3>
            <p>{title}</p>
            <button>Learn More</button>
        </div>
    );
}