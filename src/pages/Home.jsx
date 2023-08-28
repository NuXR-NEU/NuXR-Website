import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron";
import AboutSection from "../components/AboutSection";
import DisplaySection from "../components/DisplaySection";
import WebgiViewer from "../components/WebgiViewer";
import Loader from "../components/Loader";
import { useRef } from "react";

function Home() {

  const webgiViewerRef = useRef();
  const contentRef = useRef();

  return (
    <div className="App">
      {/* <Loader /> */}  
      <div ref={contentRef} id="content">
        {/* <Nav/> */}
        <Jumbotron/>
        <AboutSection/>
        <DisplaySection/>
      </div>
      <WebgiViewer contentRef={contentRef} ref={webgiViewerRef}/>

    </div>
  );
}

export default Home;