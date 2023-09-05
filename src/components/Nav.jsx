import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/nuxr.png";

function Nav() {
  const expand = () => {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  };

  return (
    <div className="topnav" id="myTopnav">
      <div>
        <a href="/" style={{ textDecoration: "none" }}>
          <img
            style={{ height: "30px", padding: "5px" }}
            src={Logo}
            alt="Apple"
          />
        </a>
      </div>
      <div className="nav-right">
        <a className="page" href="/projects">
          Projects
        </a>
        <a className="page" href="/events">
          Events
        </a>
        <a className="page" href="/showcase">
          Showcase
        </a>
        <a className="page" href="/xgames">
          X-Games
        </a>
        <a className="page" href="/socials">
          Join Us!
        </a>
        <a
          style={{ fontSize: "15px" }}
          className="icon"
          onClick={expand}
        >
          &#9776;
        </a>
      </div>
    </div>
  );
}

export default Nav;
