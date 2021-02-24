// react
import React, { Suspense } from "react";

// react router
import { Switch, Route } from "react-router-dom";

// components
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Cards from "./components/Cards/Cards";

// style
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row } from "react-bootstrap";

// the full App (pretty easy to understand)
const App = () => {
    return (
        <>
            <Container fluid="true">
                <Row>
                    <NavBar />
                </Row>

                <Row>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="/carte">
                            <Suspense fallback={null}>
                                <Cards />
                            </Suspense>
                        </Route>
                        <Route exact path="/lore">
                            <Home />
                        </Route>
                        <Route exact path="/acquista">
                            <Home />
                        </Route>
                    </Switch>
                </Row>
            </Container>
        </>
    );
};

export default App;
