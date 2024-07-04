import {Routes, Route } from "react-router-dom";
import Home from "./pages/home";


export default function Allroutes()
{
    <Routes>
      <Route path="/">
        <Route index element={<Home/>} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<div>no page route</div>} />
      </Route>
    </Routes>
}