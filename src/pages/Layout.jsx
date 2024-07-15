import { Outlet } from "react-router-dom";
import "./Layout.css"
import SideCard from "../components/SideCard/SideCard";

export default function Layout() {
  return (
    <div className="layout">
        <SideCard/>
        <div className="content">
          <Outlet/>
        </div>
    </div>
  )
}
