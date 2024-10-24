import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Layout.css"

export default function Layout() {
  
  let [title, setTitle] = useState("")
  let [desc, setDesc] = useState("")

  const nav = useNavigate();

  return (
    <div className="layout">

        <div className="layoutTitle">
          <h1> {title=='ZZZZZZZZZZZZZZZZ'?'Others':title} </h1> 
        </div>

        <div className="content">
          <Outlet context={[setTitle, setDesc]}/>
        </div>

        <div className="goback" onClick={() => {nav('/')}}>
          <div>Go Back</div>
        </div>

    </div>
  )
}
