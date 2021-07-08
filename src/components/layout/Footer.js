import React from 'react';

import { Navbar } from 'react-bootstrap/';

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" className="mt-2" data-testid="footer">
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Navbar.Text data-testid="footer-text">
                Derechos Reservados 2021 <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/edgarmancipe1989/">Edgar Mancipe</a>
                </Navbar.Text>
            </Navbar.Collapse>
        </Navbar>
    );
}
 
export default Footer;