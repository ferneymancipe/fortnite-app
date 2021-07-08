import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from '../../layout/Header';
import ItemBattlePass from './ItemBattlePass';
import AlertInfoError from '../../tools/AlertInfoError';

import { ResponsiveEmbed, Tab, Row, Nav, Col, Container, CardColumns, Spinner, Media } from 'react-bootstrap/';

const BattlePassFortnite = () => {

    const [battlePassItems, setBattlePassItems] = useState([]);
    const [loadingData, endLoadingData] = useState(false);
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const getBattlePassItems = async () => {
            try {
                const url = process.env.REACT_APP_URL_BATTLEPASS;
                await axios.get(url, {
                    headers: {
                        'Authorization': process.env.REACT_APP_AUTHORIZATION_KEY
                    }
                }).then( battlePassList =>
                    setBattlePassItems(orderInfoByWeeks(battlePassList.data.rewards))
                );
                endLoadingData(true);
            } catch (error) {
                endLoadingData(true);
                setShowAlert(true);
            }
        }
        getBattlePassItems();
        // eslint-disable-next-line
    }, []);

    const orderInfoByWeeks = (battlePassItemsList) => {
        return battlePassItemsList.reduce((accumulator, itemBattlePass) => {
            const weekBattlePass = (itemBattlePass['tier'] / 10);
            if (!accumulator[weekBattlePass])
               accumulator[weekBattlePass] = [];

            accumulator[weekBattlePass].push(itemBattlePass);
            return accumulator;
        }, []);
    }

    if (!battlePassItems)
        return null;

    return (
        <React.Fragment>
            <ResponsiveEmbed aspectRatio="9by16">
                <video id="video-background" autoPlay controls>
                    <source src="https://media.fortniteapi.io/videos/seasons/bp_s17_es-419.mp4" type="video/mp4" />
                </video>
            </ResponsiveEmbed>
            <Header 
                title="Pase de Batalla"
                subtitle="Observa toda la lista de recompensas de la temporada"
            />            
            <Container as="main" fluid className="text-center mb-5" data-testid="battle-pass-fortnite">
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
                            <React.Fragment>

                                <Media className="mb-5" as="section"data-testid="home-fortnite-media">
                                    <Media.Body as="article">
                                        <h3>¿QUÉ ES EL PASE DE BATALLA?</h3>
                                        <p className="text-white">El pase de batalla es un objeto destacado en Battle Royale de Fortnite. Ofrece a los jugadores la oportunidad de desbloquear contenido estético dentro del juego, monedas V y más. Obtendrás experiencia si juegas el juego, el cual otorga niveles (hasta el 100) que te dan recompensas. A modo de opción, los jugadores también podrán comprar niveles con un costo de 150 monedas V por cada nivel.</p>
                                    </Media.Body>
                                </Media>
                                <Tab.Container id="left-tabs-example" defaultActiveKey='item0'>
                                    <Row>
                                        <Col sm={3} lg={2} xl={2}>
                                            <Nav variant="pills" className="flex-column">
                                                {
                                                    battlePassItems.map((listItemsBattlePassPerWeek, keyWeek) => (
                                                        <Nav.Item key={keyWeek}>
                                                            <Nav.Link eventKey={`item${keyWeek}`} className="custom-button">Semana {keyWeek+1}</Nav.Link>
                                                        </Nav.Item>
                                                    ))
                                                }
                                            </Nav>
                                        </Col>
                                        <Col sm={9} lg={10} xl={10}>
                                            <Tab.Content>
                                                {
                                                    battlePassItems.map((listItemsBattlePassPerWeek, keyWeek) => (
                                                    <Tab.Pane key={keyWeek} eventKey={`item${keyWeek}`}>
                                                        <CardColumns as="section">
                                                            {
                                                                listItemsBattlePassPerWeek.map((itemOfWeek, key) => (
                                                                    <ItemBattlePass
                                                                        key={key}
                                                                        itemBattlePass={itemOfWeek}
                                                                    />
                                                                ))
                                                            }
                                                        </CardColumns>
                                                    </Tab.Pane>
                                                    ))
                                                }
                                            </Tab.Content>
                                        </Col>
                                    </Row>
                                </Tab.Container>
                            </React.Fragment>
                        )
                }
            </Container>
        </React.Fragment>
    );
}
 
export default BattlePassFortnite;