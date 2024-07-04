import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Workshop from "./pages/workshop/workshop";
import Publications from "./pages/publication/publications";
import Researchprojects from "./pages/research_projects/researchprojects";
import Researchtalks from "./pages/research_talks/researchtalks";

export default function Allroutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/workshop" element={<Workshop />} />
        <Route path="/publication" element={<Publications />} />
        <Route path="/project" element={<Researchprojects />} />
        <Route path="/talks" element={<Researchtalks />} />
        <Route path="*" element={<div>no page route</div>} />
      </Routes>
    </BrowserRouter>
  );
}
