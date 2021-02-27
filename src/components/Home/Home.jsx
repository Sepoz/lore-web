import React from "react";

// bootstrap
import { Col } from "react-bootstrap";

import HomeAnimation from "../HomeAnimation/HomeAnimation";

import "./Home.css";

// Home component returns a full page rotating card with text overimposed
const Home = () => {
    return (
        <div className="home-canvas">
            <div className="home-title">
                <h1>Dario Moccia's Lore Trading Cards</h1>
            </div>
            <HomeAnimation />
        </div>
    );
};

export default Home;
