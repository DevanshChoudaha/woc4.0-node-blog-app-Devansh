import React from "react";
import "./TopBar.css";

type TopBarProp = {
    
}

class TopBar extends React.Component <{}> {
    render(): React.ReactNode {
        return (
            <div className="top">
                <div className="topLeft">
                    <i className="topIcon fab fa-linkedin"></i>
                    <i className="topIcon fab fa-github"></i>
                    <i className="topIcon fab fa-twitter"></i>
                </div>

                <div className="topCenter">
                    <ul className="topList">
                        <li className="topListItem">HOME</li>
                        <li className="topListItem">ABOUT</li>
                        <li className="topListItem">CONTACT</li>
                        <li className="topListItem">WRITE</li>
                        <li className="topListItem">LOGOUT</li>
                    </ul>
                </div>

                <div className="topRight">
                    <img
                        className="topImg"
                        src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
                        alt="" />

                    <i className="topSearchIcon fas fa-search"></i>
                </div>
            </div>
        )
    }
}

export default TopBar;