import React from "react";
import Logo from '../assets/images/nuxr.png';


function Nav(){
    return (
        <nav className="nav-wrapper">
            <div className="nav-content">
                <ul className="list-styled">
                    <li>
                    <a className="link-styled" href="/" style={{ textDecoration: 'none' }}>
                        <img className="link-styled" style={{ height : '30px', margin : '9px'}} src={Logo} alt="Apple"/>
                        </a>
                    </li>
                    <li>
                        <a className="link-styled" href="/projects" style={{ textDecoration: 'none' }}>Projects</a>
                    </li>
                    <li>
                        <a className="link-styled" href="/events" style={{ textDecoration: 'none' }}>Events</a>
                    </li>
                    <li>
                        <a className="link-styled" href="/showcase" style={{ textDecoration: 'none' }}>Showcase</a>
                    </li>
                    <li>
                        <a className="link-styled" href="/xgames" style={{ textDecoration: 'none' }}>X-Games</a>
                    </li>
                    <li>
                     <a className="link-styled" href="/socials" style={{ textDecoration: 'none' }}>Join Us!</a> 
                    </li>
                </ul>

            </div>
        </nav>

    );
}

export default Nav;