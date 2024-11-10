import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo-cake.jpeg";

export const Menu = () => {
    return (
        <div style={{
            position: 'absolute',
        }}>
            <Navbar>
                <Container>
                    <Navbar.Brand href="#home">
                        <img src={logo} alt="Logo" width={50} />
                        Tamara Bakes and Treats
                    </Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Bakes and Treats" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#items/chocolates">Chocolates</NavDropdown.Item>
                                <NavDropdown.Item href="#items/cakes">Cakes</NavDropdown.Item>
                                <NavDropdown.Item href="#items/cookies">Cookies</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}