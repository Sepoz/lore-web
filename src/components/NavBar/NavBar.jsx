import { Navbar, Nav } from "react-bootstrap";

// NavBar at the top (not definitive)
const NavBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
            <Navbar.Brand href="#home">Lore Trading Cards</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#lore">La Lore</Nav.Link>
                    <Nav.Link href="#acquista">Acquista</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;
