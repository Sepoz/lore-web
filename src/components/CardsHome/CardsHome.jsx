import React from "react";

import { Col } from "react-bootstrap";
import "./CardsHome.css";

import logo from "../../img/CardBack.jpeg";

const CardsHome = () => {
    return (
        <Col>
            <div className="container">
                <h1>Seleziona una carta a sinistra</h1>
                <p>200 carte originali, 10 artisti e tuta la Lore</p>
                <img src={logo} alt="rotating logo" />
            </div>
        </Col>
    );
};

export default CardsHome;
