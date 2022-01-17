import React from "react";
import Header from "../../components/header/Header";
import SideBar from "../../components/sidebar/SideBar";
import Posts from "../../components/posts/Posts";
import "./home.css";

class Home extends React.Component <{}> {
    render(): React.ReactNode {
        return (
            <>
                <Header/>
                <div className="home">
                    <Posts/>
                    <SideBar/>
                </div>
            </>
        )
    }
}

export default Home;