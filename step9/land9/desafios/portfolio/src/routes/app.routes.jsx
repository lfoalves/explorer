import { Routes, Route } from "react-router-dom";
import { Music } from "../components/Music";

import { App } from "./App";

import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import { Projects } from "../pages/Projects";
import { Techs } from "../pages/Techs";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";

export function AppRoutes() {
  return (
    <Routes>
      <Route  element={<App />} >
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/techs" element={<Techs />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}