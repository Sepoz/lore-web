// components
import CardInfo from "./components/CardInfo/CardInfo";
import Card from "./components/Card/Card";
import NavBar from "./components/NavBar/NavBar";
import VerticalNav from "./components/VerticalNav/VerticalNav";

// data
import cardsData from "./cardsData/cardsData";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

const App = () => {
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
                        <VerticalNav cardsData={cardsData} />
                    </Col>
                    <Col>
                        <CardInfo />
                    </Col>
                    <Col sm={6}>
                        <Card />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
