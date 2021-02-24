// react + react-router
import React from "react";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

// bootstrap
import { Col } from "react-bootstrap";

//css
import "./Cards.css";

//components
import CardInfo from "../CardInfo/CardInfo";
import CardsHome from "../CardsHome/CardsHome";
import Card2 from "../Card2/Card2";

// mock data
import cardsData from "../../cardsData/cardsData";

const Cards = () => {
    const { path, url } = useRouteMatch();

    // easiest way I found to override bootstrap
    const textOverride = {
        color: "white",
        textDecoration: "none",
    };

    return (
        <>
            <Col sm={2}>
                <ul className="nav-list">
                    {cardsData.map((card) => (
                        <li key={card.cardID} className="nav-element">
                            <Link
                                to={`${url}/${card.path}`}
                                style={textOverride}
                            >
                                {card.cardName}
                            </Link>
                        </li>
                    ))}
                </ul>
            </Col>

            <Switch>
                <Route exact path={path}>
                    <CardsHome />
                </Route>
                {cardsData.map((card) => (
                    <Route key={card.cardID} path={`${path}/${card.path}`}>
                        <CardInfo cardInfo={card} />
                        <Card2 cardImg={card.cardImg} />
                    </Route>
                ))}
            </Switch>
        </>
    );
};

export default Cards;
