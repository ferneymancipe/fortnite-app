import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Header = ({title, subtitle}) => {
 
    return (
        <Jumbotron fluid as="header" className="jumbotron-img-style" data-testid="header">
            <Container as="article">
                <h1 data-testid="header-title">{title}</h1>
                <h2 data-testid="header-subtitle">{subtitle}</h2>
            </Container>
        </Jumbotron>
    );
}
 
export default Header;