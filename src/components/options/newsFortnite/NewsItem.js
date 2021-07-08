import React from 'react';

import Card from 'react-bootstrap/Card';

const NewsItem = ({newsItem}) => {
    return (
        <Card bg="dark" text="light" as="article" className="animated-card" data-testid="item-news">
            <Card.Header data-testid="item-news-header" as="h3">{newsItem.tabTitle}</Card.Header>
            <Card.Img data-testid="item-news-picture" variant="top" src={newsItem.image} alt=""/>
            <Card.Body as="article">
                <Card.Subtitle data-testid="item-news-subtitle" className="mb-2">{newsItem.title}</Card.Subtitle>
                <Card.Text as="p" data-testid="item-news-text">{newsItem.body}</Card.Text>
            </Card.Body>
            <Card.Footer className="text-right" as="footer" data-testid="item-news-footer">
                <small className="text-muted">Última actualización: {newsItem.date.substring(0,10)}</small>
            </Card.Footer>
        </Card>
    );
}
 
export default NewsItem;