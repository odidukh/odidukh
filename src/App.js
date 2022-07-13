import React from "react";
import Navigation from "./components/Navigation";
import { NavProvider } from "./context/nav-context-and-provider";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Skills from "./pages/Skills";

const App = () => {
    return (
        <NavProvider>
            <Navigation />
            <Home />
            <About />
            <Skills />
            <Contact />
        </NavProvider>
    );
};

export default App;
