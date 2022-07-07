import React from "react";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

const App = () => {
    return (
        <div>
            <Navigation />
            <Home />
            <About />
            <Skills />
            <Contact />
        </div>
    );
};

export default App;
