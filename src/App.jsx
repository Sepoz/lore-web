import CardInfo from "./components/CardInfo/CardInfo";
import Card from "./components/Card/Card";
import NavBar from "./components/NavBar/NavBar";

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
                <Row>
                    <Col className="text-center">
                        <CardInfo />
                    </Col>
                    <Card />
                </Row>
            </Container>
        </>
    );
};

export default App;
