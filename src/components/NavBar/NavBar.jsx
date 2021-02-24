import React from "react";
import { Link } from "react-router-dom";

import { Col } from "react-bootstrap";
import "./NavBar.css";

// NavBar at the top (not definitive)
const NavBar = () => {
    // easiest way I found to override bootstrap
    const textOverride = {
        color: "white",
        textDecoration: "none",
    };

    return (
        <Col>
            <div className="nav">
                <ul className="links">
                    <li>
                        <Link to="/" style={textOverride}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/carte" style={textOverride}>
                            Carte
                        </Link>
                    </li>
                    <li>
                        <Link to="/lore" style={textOverride}>
                            La Lore
                        </Link>
                    </li>
                    <li>
                        <Link to="/acquista" style={textOverride}>
                            Acquista
                        </Link>
                    </li>
                </ul>
            </div>
        </Col>
    );
};

export default NavBar;
