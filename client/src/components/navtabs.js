import React from "react";
import yticon from "./assets/images/if_yt_icon.png";
import fbicon from "./assets/images/if_fb_icon.png";

const NavTabs = props => (
    <div>
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("Home")}
                    className={
                        props.currentPage === "Home" ? "nav-link active" : "nav-link"
                    }
                >
                    Home
                </a>
            </li>
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("faq")}
                    className={
                        props.currentPage === "faq" ? "nav-link active" : "nav-link"
                    }
                >
                    Freq. Asked Questions
                </a>
            </li>
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("aboutUs")}
                    className={
                        props.currentPage === "aboutUs" ? "nav-link active" : "nav-link"
                    }
                >
                    About Us!
                </a>
            </li>
            <li className="nav-item">
                <a
                    onClick={() => props.handlePageChange("Contact")}
                    className={
                        props.currentPage === "Contact" ? "nav-link active" : "nav-link"
                    }
                >
                    Contact
                </a>
            </li>
            <a> 
                <img id="fbIcon" src={fbicon} alt="Facebook Link" />
                <img id="ytIcon" src={yticon} alt="YouTube Link" />    
             </a>
        </ul>
    </div>
);

export default NavTabs;
