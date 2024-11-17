import { Nav, Navbar } from "react-bootstrap";
import logo from "../assets/logo-cake.jpeg";
import { PageLink } from "./PageLink";
import { theme } from "../theme";

const NavLink = ({ text, url }: { text: string; url: string }) => (
    <PageLink text={text} url={url} style={{ marginTop: 10, marginRight: 20 }} linkStyle={{ color: theme.primaryColor, fontSize: 20, textDecoration: 'none' }} />
)

export const NavBar = () => {
    return (
        <div style={{
            marginLeft: 5,
        }}>
            <Navbar>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" width={50} />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink text="Home" url=""/>
                    <NavLink text="Menu" url="menu"/>
                    <NavLink text="Contact" url="contact"/>
                    {/* <Nav.Link href="/order">Place order</Nav.Link> */}
                    {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
                    {/* <NavDropdown title="Bakes and Treats" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#items/chocolates">Chocolates</NavDropdown.Item>
                                <NavDropdown.Item href="#items/cakes">Cakes</NavDropdown.Item>
                                <NavDropdown.Item href="#items/cookies">Cookies</NavDropdown.Item>
                            </NavDropdown> */}
                </Nav>
            </Navbar>
        </div>
    )
}