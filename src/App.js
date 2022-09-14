import React from "react";
import "./index.css"
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Skills from "./components/Skils";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
    return (
        <div>
            <Hero />
            <Info>
                <Navbar />
                <Skills />
                <Portfolio />
            </Info>
            <Contact />
        </div>
    );
}

export default App;