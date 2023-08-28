import React from "react";

function Showcase() {

  return (
    <div className="showcase-page wrapper">
    <div className="showcase-title">
        <div className="title">Showcase</div> 
        <div className="text">
          A platform for you to show anything you would like. 
        </div>   
        <div className="text">
          From personal projects to a write-up about a product. Get creative.
        </div>  
    </div>
    <div className="showcase-container">
          <div className="send-container">
          <div className="empty-title">Got something cool to show?</div>
          <p className="text">Send it over, we would love to put it right here.</p>
          </div>
      </div>
  </div>
  );
}

export default Showcase;