import React from "react";
import "./sidebar.css";

class SideBar extends React.Component <{}> {
    render(): React.ReactNode {
        return (
            <div className="sidebar">
                <div className="sidebarItem">
                    <span className="sidebarTitle">ABOUT ME</span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni cumque quo fugit natus molestias?
                    </p>
                </div>

                <div className="sidebarItem">
                    <span className="sidebarTitle">CATEGORIES</span>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">Tech</li>
                        <li className="sidebarListItem">Business</li>
                        <li className="sidebarListItem">Sports</li>
                        <li className="sidebarListItem">Entertainment</li>
                        <li className="sidebarListItem">Music</li>
                    </ul>
                </div>

                <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW US</span>
                    <div className="sidebarSocial">
                        <i className="sidebarIcon fab fa-linkedin"></i>
                        <i className="sidebarIcon fab fa-github"></i>
                        <i className="sidebarIcon fab fa-twitter"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default SideBar;