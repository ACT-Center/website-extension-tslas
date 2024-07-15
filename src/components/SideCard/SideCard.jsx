import { Link } from "react-router-dom"
import "./SideCard.css"

export default function SideCard() {
  return (
    <div className="sideCard">
        <h3>Workshops & Conferences</h3>
        <p>Access Exclusive, Cutting-Edge Insights: Unlock the Latest Research and Industry Trends to Drive Innovation</p>
        <button> <Link to={"/"}> Go Back </Link> </button>
    </div>
  )
}
