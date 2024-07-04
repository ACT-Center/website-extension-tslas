import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";

export default function Allroutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<div>no page route</div>} />
      </Routes>
    </BrowserRouter>
  );
}
