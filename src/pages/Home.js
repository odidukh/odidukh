import React from "react";
import { useNav } from "../hooks/useNav";

const Home = () => {
    const homeRef = useNav("Home");
    return (
        <div ref={homeRef} className="homePage" id="homePage">
            <h1 className="greeting">I'm Oles Didukh</h1>
            <h2 className="proffesion">A Front-end Developer</h2>
        </div>
    );
};

export default Home;
