import { Link } from "react-router-dom"
import "./SideCard.css"

export default function SideCard({title, desc}) {
  return (
    <div className="sideCard">
        <h3>{title}</h3>
        <p>{desc}</p>
        <button> <Link to={"/"}> Go Back </Link> </button>
    </div>
  )
}
