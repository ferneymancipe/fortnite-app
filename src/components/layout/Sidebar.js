import React from 'react';
import { Navbar, Nav } from 'react-bootstrap/';

const Sidebar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" data-testid="sidebar">
            <Navbar.Brand href="/">
                <img
                    data-testid="sidebar-picture"
                    alt="logo fortnite"
                    src="/img/logo_fortnite.png"
                    height="30px"
                    className="d-inline-block align-top"
                />{' '}Guía de Bolsillo
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-var" />
            <Navbar.Collapse id="basic-navbar-var">
                <Nav className="ml-auto">
                    <Nav.Link data-testid="sidebar-link" href="/BattlePassFortnite">Pase de Batalla</Nav.Link>
                    <Nav.Link href="/Challenges">Misiones</Nav.Link>
                    <Nav.Link href="/NewsFortnite">Noticias</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
 
export default Sidebar;