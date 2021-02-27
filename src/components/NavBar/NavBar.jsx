import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Col } from "react-bootstrap";
import "./NavBar.css";

// NavBar at the top (not definitive)
const NavBar = () => {
    const [isSelected, setIsSelected] = useState({
        li1: true,
        li2: false,
        li3: false,
        li4: false,
    });

    // easiest way I found to override bootstrap
    const textOverride = {
        color: "black",
        textDecoration: "none",
    };

    return (
        <Col>
            <div className="nav">
                <ul className="links">
                    <li
                        onClick={() =>
                            setIsSelected({
                                li1: true,
                                li2: false,
                                li3: false,
                                li4: false,
                            })
                        }
                        className={isSelected.li1 ? "link-selected" : "link"}
                    >
                        <Link to="/" style={textOverride}>
                            Home
                        </Link>
                    </li>
                    <li
                        onClick={() =>
                            setIsSelected({
                                li1: false,
                                li2: true,
                                li3: false,
                                li4: false,
                            })
                        }
                        className={isSelected.li2 ? "link-selected" : "link"}
                    >
                        <Link to="/carte" style={textOverride}>
                            Carte
                        </Link>
                    </li>
                    <li
                        onClick={() =>
                            setIsSelected({
                                li1: false,
                                li2: false,
                                li3: true,
                                li4: false,
                            })
                        }
                        className={isSelected.li3 ? "link-selected" : "link"}
                    >
                        <Link to="/lore" style={textOverride}>
                            La Lore
                        </Link>
                    </li>
                    <li
                        onClick={() =>
                            setIsSelected({
                                li1: false,
                                li2: false,
                                li3: false,
                                li4: true,
                            })
                        }
                        className={isSelected.li4 ? "link-selected" : "link"}
                    >
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
