import { Outlet } from "react-router-dom";
import { useState } from "react";
import "./Layout.css"

export default function Layout() {
  
  let [title, setTitle] = useState("")
  let [desc, setDesc] = useState("")

  return (
    <div className="layout">

        <div className="layoutTitle">
          <h1> {title} </h1> 
        </div>

        <div className="content">
          <Outlet context={[setTitle, setDesc]}/>
        </div>

    </div>
  )
}
