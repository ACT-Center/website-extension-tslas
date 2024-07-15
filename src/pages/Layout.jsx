import { Outlet } from "react-router-dom";
import Card from "../components/card/card";

import "./Layout.css"

export default function Layout() {
  return (
    <div className="layout">
        <div className="sideBar">
          <Card id="card1" heading="Reasearch Projects" title="Lorem ipsum dolor sit, amet consectetur adipisicing elit. "/>
        </div>
        <div className="content">
          <Outlet/>
        </div>
    </div>
  )
}
