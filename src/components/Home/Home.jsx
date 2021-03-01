import React from "react";

import { Canvas } from "react-three-fiber";

import HomeAnimation from "../HomeAnimation/HomeAnimation";

import "./Home.css";

// Home component returns a full page rotating card with text overimposed
const Home = () => {
    return (
        <div className="home-canvas">
            <Canvas camera={{ position: [1, 1, 10], fov: 20 }} shadowMap>
                <HomeAnimation />
            </Canvas>
        </div>
    );
};

export default Home;
