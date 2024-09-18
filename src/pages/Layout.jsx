import { Outlet } from "react-router-dom";
import "./Layout.css"
import SideCard from "../components/SideCard/SideCard";
import { useState } from "react";

export default function Layout() {
  
  let [title, setTitle] = useState("")
  let [desc, setDesc] = useState("")

  return (
    <div className="layout">
        <h1 className="layoutTitle"> {title} </h1>
        <div className="content">
          <Outlet context={[setTitle, setDesc]}/>
        </div>

    </div>
  )
}
