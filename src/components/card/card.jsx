import '../card.css'
export default function Card({section , heading , title})
{
    return (
        <div className="main" id={section}>
            <h1>{heading}</h1>
            <h6>{title}</h6>
        </div>
    );
}