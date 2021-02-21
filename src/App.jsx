// react
import React, { useState, Suspense } from "react";

// components
import CardInfo from "./components/CardInfo/CardInfo";
import Card2 from "./components/Card2/Card2";
import NavBar from "./components/NavBar/NavBar";
import VerticalNav from "./components/VerticalNav/VerticalNav";
import BaseView from "./components/BaseView/BaseView";

// data
import cardsData from "./cardsData/cardsData";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./components/VerticalNav/VerticalNav.css";
import "./components/BaseView/BaseView";

// the full App (pretty easy to understand)
const App = () => {
    const [card, setCard] = useState(cardsData[0]);
    const [baseView, setBaseView] = useState(true);

    return (
        <>
            <Container fluid="true">
                <Row>
                    <Col>
                        <NavBar />
                    </Col>
                </Row>
                <Row className="align-items-center">
                    <Col sm={2}>
                        <VerticalNav
                            setCard={setCard}
                            setBaseView={setBaseView}
                        />
                    </Col>
                    <Col>
                        {baseView ? <BaseView /> : <CardInfo cardData={card} />}
                    </Col>
                    <Col sm={6}>
                        <Suspense fallback={null}>
                            <Card2 cardImg={card.cardImg} />
                        </Suspense>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
