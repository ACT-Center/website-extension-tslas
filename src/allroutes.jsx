import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import Workshop from "./pages/workshop/workshop";
import Publications from "./pages/publication/publications";
import Researchprojects from "./pages/research_projects/researchprojects";
import Researchtalks from "./pages/research_talks/researchtalks";
import Layout from "./pages/Layout";

export default function Allroutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/section" element={<Layout/>}>
          <Route path="projects" element={<Researchprojects />} />
          <Route path="workshops" element={<Workshop />} />
          <Route path="publications" element={<Publications />} />
          <Route path="talks" element={<Researchtalks />} />
        </Route>

        <Route path="*" element={<div>no page route</div>} />
      </Routes>
    </BrowserRouter>
  );
}
