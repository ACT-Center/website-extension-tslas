import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";


export default function Allroutes()
{
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<div>/ route</div>}>
      <Route index element={<div>/ route</div>} />
        <Route path="home" element={<Home />} />
        <Route path="*" element={<div>no page route</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
}