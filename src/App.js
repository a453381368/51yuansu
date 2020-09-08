import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Links from "./components/Links";
import Tail from "./components/Tail";
import Hero from "./components/Hero";
import HomeBody from "./components/HomeBody";

require("./css/index.css");


function App() {
    return (
        <div className="App">
            <Header />
            <Hero />
            <HomeBody />
            <Tail />
            <Links />
            <Footer />
        </div>
    );
}

export default App;
