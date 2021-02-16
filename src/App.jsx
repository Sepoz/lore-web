import { useState, Suspense } from "react";

// components
import CardInfo from "./components/CardInfo/CardInfo";
import Card2 from "./components/Card2/Card2";
import NavBar from "./components/NavBar/NavBar";

// data
import cardsData from "./cardsData/cardsData";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import "./components/VerticalNav/VerticalNav.css";

const App = () => {
    const [card, setCard] = useState(cardsData[0]);

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
                        <ul className="vertical-nav">
                            {cardsData.map((card) => (
                                <li
                                    key={card.cardID}
                                    className="nav-element"
                                    onClick={() => setCard(card)}
                                >
                                    {card.cardName}
                                </li>
                            ))}
                        </ul>
                    </Col>
                    <Col>
                        <CardInfo cardData={card} />
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
