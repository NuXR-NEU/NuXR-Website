import Nav from "./components/Nav";
import Home from "./pages/Home";
import Socials from "./pages/Socials";
import { useRef } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Showcase from "./pages/Showcase";
import XGames from "./pages/XGames";

function App() {

  const webgiViewerRef = useRef();
  const contentRef = useRef();

  return (
    <div>
    <Nav/>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="socials" element={<Socials />} />
          <Route path="projects" element={<Projects />} />
          <Route path="events" element={<Events />} /> 
          <Route path="showcase" element={<Showcase />} />
          <Route path="xgames" element={<XGames />} /> 
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
