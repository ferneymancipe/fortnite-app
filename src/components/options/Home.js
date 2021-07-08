import React from 'react';

import Header from '../layout/Header';
import { Container, Carousel, Button, Image, Media } from 'react-bootstrap/';

import { headerArticlesText, carouselArticlesText } from '../tools/textArticles';

const Home = () => {
    return (
        <React.Fragment>
            <Header
                title="Bienvenidos"
                subtitle="Tu guía útil de seguimiento de misiones para los jugadores de Fortnite Battle Royale"
            />
            <Container className="text-center" as="main">
                {
                    headerArticlesText.map((article, index) => 
                        <Media className="mb-5" as="section" key={index} data-testid="home-fortnite-media">
                            <Media.Body as="article">
                                <h3>{article.titleArticle}</h3>
                                <p className="text-white">{article.descriptionArticle}</p>
                            </Media.Body>
                        </Media>
                    )
                }
                <Carousel as="section" className="mb-5" data-testid="home-fortnite-carousel">
                    {  
                        carouselArticlesText.map((article, index) => 
                            <Carousel.Item interval={2000} key={index} data-testid="home-fortnite-carousel-item">
                                <Image
                                    fluid 
                                    src={article.imageSrc}
                                    alt={article.imageAlt}
                                />
                                <Carousel.Caption as="article" data-testid="home-fortnite-carousel-caption">
                                <h4>{article.titleArticle}</h4>
                                <h5>{article.subTitleArticle}</h5>
                                <Button href={article.buttonHref} variant="dark" size="lg" className="custom-button">
                                    Más Información
                                </Button>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    }
                </Carousel>
            </Container>
        </React.Fragment>
    );
}
 
export default Home;