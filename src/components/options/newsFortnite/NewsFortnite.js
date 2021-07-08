import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Header from '../../layout/Header';
import NewsItem from './NewsItem';
import AlertInfoError from '../../tools/AlertInfoError';

import { CardColumns, Container, Spinner }  from 'react-bootstrap/';

const NewsFortnite = () => {
    const [newsFortnite, setNewsFortnite] = useState([]);
    const [loadingData, endLoadingData] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const getNews = async () => {
            try {
                const url = process.env.REACT_APP_URL_NEWS;
                await axios.get(url, {
                    headers: {
                      'Authorization': process.env.REACT_APP_AUTHORIZATION_KEY
                    }
                }).then( newsList => 
                    setNewsFortnite(newsList.data.news)
                );
                endLoadingData(true);
            } catch (error) {
                endLoadingData(true);
                setShowAlert(true);
            }
        }
        getNews();
        // eslint-disable-next-line
    }, [])

    if (!newsFortnite) 
        return null;

    return (
        <React.Fragment>
            <Header 
                title="Noticias"
                subtitle="Entérate de las últimas noticias y novedades de la temporada"
            />
            <Container as="main" fluid className="text-center" data-testid="news-fortnite">
                {
                    showAlert ? 
                        <AlertInfoError 
                            setShowAlert={setShowAlert}
                        />
                    : 
                        (
                            !loadingData ? 
                                <Spinner animation="grow" variant="light">
                                    <span className="sr-only">Cargando...</span>
                                </Spinner>
                            :
                                <CardColumns as="section">
                                    {newsFortnite.map(newsItem => (
                                        <NewsItem
                                            key={newsItem.id}
                                            newsItem={newsItem}
                                        />
                                    ))}
                                </CardColumns>
                        )
                }
            </Container>
        </React.Fragment>
    );
}
 
export default NewsFortnite;