import React, { useState, useEffect } from "react";
import Head from "../assets/images/head.png";
import Mountain from "../assets/images/lake.png";
import Dragon from "../assets/images/dragon.png";
import HedgeHog from "../assets/images/hedgehog.png";
import Unicorn from "../assets/images/unicorn.png";

function DisplaySection() {
  const [isBottom, setIsBottom] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      if (scrollTop + windowHeight >= documentHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="display-section wrapper">
      <img
        src={Mountain}
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          maxHeight: "80%",
        }}
      ></img>
      <img src={Head} style={{ position: "absolute", bottom: 0 }}></img>
      {isBottom && (
        <div>
          <img
            src={Dragon}
            style={{
              width: "250px",
              position: "absolute",
              right: "10%",
              top: "10%",
            }}
          ></img>
          <img
            src={HedgeHog}
            style={{
              width: "100px",
              position: "absolute",
              bottom: "40%",
              right: "20%",
            }}
          ></img>
           <img
            src={Unicorn}
            style={{
              width: "175px",
              position: "absolute",
              bottom: "40%",
              left: "20%",
            }}
          ></img>
          {/* <iframe src="https://giphy.com/stickers/nasa-nasagif-5eFFhJ3yrAIndRQeFx" width="150" height="150" class="giphy-embed" frameBorder="0" style={{
              position: "absolute",
              top: "5%",
              left: "15%",
            }} ></iframe> */}
        </div>
      )}
      <p className="text">Join Us</p>
      <span className="description">
      Together, we'll explore, create, and shape the future of Extended Reality.
      </span>
      <button className="back-button" onClick={handleScrollToTop}>
        {" "}
        TOP{" "}
      </button>
    </div>
  );
}

export default DisplaySection;
