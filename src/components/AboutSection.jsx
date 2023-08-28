import React from "react";

function AboutSection() {

  return (
    <div className="about-section wrapper">
       <div className="content">
          <div className="text">Who are we ?</div>
          <div className="title">Welcome to NuXR, your gateway to the world of Extended Reality(XR)! We are a passionate community of creators, innovators, and enthusiasts who share a common interest in exploring and pushing the boundaries of XR technology. </div>
        </div>
        <div className="content">
          <div className="text" style={{fontSize: "38px"}}>Extended Reality (XR)</div>
          <div className="title">The umbrella term for any technology that alters reality by adding digital elements to the physical or real-world environment to any extent and includes but is not limited to, augmented reality (AR), mixed reality (MR) and virtual reality (VR). </div>
        </div>
    </div>
  );
}

export default AboutSection;
