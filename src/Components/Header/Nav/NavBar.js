import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './Nav.scss';

const NavBar = () => {
    return (
        <Navbar className="navbar-component" collapseOnSelect expand="lg" variant="light" fixed="top" >
            <Navbar.Brand href="#home" id="brand-name">C5 Concrete</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="toggle-button">
                <Nav className="mr-auto">
                    <Nav.Link className="nav-item" href="#features">About</Nav.Link>
                    <Nav.Link className="nav-item" href="#pricing">Pricing</Nav.Link>
                    <Nav.Link className="nav-item" href="#pricing">Contact</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;