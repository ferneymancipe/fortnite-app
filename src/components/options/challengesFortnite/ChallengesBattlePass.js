import React, { useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getChallengesFortniteAction, markChallengeSelectedAction} from '../../../actions/challengesFortniteActions';

import Header from '../../layout/Header';
import ChallengeItem from './ChallengeItem';
import AlertInfoError from '../../tools/AlertInfoError';

import { Tab, Tabs, Row, Nav, Col, Container, Spinner } from 'react-bootstrap/';

const ChallengesBattlePass = () => {

    const dispatch = useDispatch();
    const markChallengeSelected = idListWeekChallenge => dispatch(markChallengeSelectedAction(idListWeekChallenge));
    
    const markChallengeList = (idList, idWeek) => {
        markChallengeSelected({idList, idWeek})
    }

    const { challengesFortnite, loading, error } = useSelector( state => state.challengesFortnite);
    // const loading = useSelector( state => state.challengesFortnite.loading);

    useEffect(() => {
        const loadChallengesFortnite = () => dispatch(getChallengesFortniteAction());
        loadChallengesFortnite();
        // eslint-disable-next-line
    }, []);

    return (
        <React.Fragment>
            <Header
                title="Misiones del Pase de Batalla de Fortnite"
                subtitle="Lista completa de las misiones de la temporada."
            />
            <Container fluid className="text-center" as="main">
            {
                error ? 
                    <AlertInfoError 
                    />
                : 
                (
                    loading ? 
                        <Spinner animation="grow" variant="light">
                            <span className="sr-only">Cargando...</span>
                        </Spinner>
                    : 
                        <Tabs defaultActiveKey="0" id="" variant="pills" className="custom-navbar mb-3">
                            {
                                challengesFortnite.map((challengesList, indexList) => (
                                    <Tab eventKey={indexList} title={challengesList.name} key={challengesList.id}>
                                        <Tab.Container defaultActiveKey='0'>
                                            <Row>
                                                <Col sm={3} lg={2} xl={2}>
                                                    <Nav variant="pills" className="flex-column">
                                                        {
                                                            challengesList.challenges.map((listChallengesPerWeek, keyWeek) => {
                                                                if (listChallengesPerWeek.quests[0].name !== "") {
                                                                    return <Nav.Item key={listChallengesPerWeek.id}>
                                                                        <Nav.Link eventKey={listChallengesPerWeek.id} className="custom-button" onClick={() => markChallengeList(challengesList.id, listChallengesPerWeek.id)}>{listChallengesPerWeek.name}</Nav.Link>
                                                                    </Nav.Item>
                                                                } else return null; 
                                                            })
                                                        }
                                                    </Nav>
                                                </Col>
                                                <Col sm={9} lg={10} xl={10}>
                                                    <Tab.Content>
                                                        {
                                                            challengesList.challenges.map((listChallengesPerWeek) => (
                                                            <Tab.Pane key={listChallengesPerWeek.id} eventKey={listChallengesPerWeek.id}>
                                                                <Row as="section">
                                                                    {
                                                                        listChallengesPerWeek.quests.map((itemChallenge) => (
                                                                            <ChallengeItem
                                                                                key={itemChallenge.id}
                                                                                itemChallenge={itemChallenge}
                                                                            />
                                                                        ))
                                                                    }
                                                                </Row>
                                                            </Tab.Pane>
                                                            ))
                                                        }
                                                    </Tab.Content>
                                                </Col>
                                            </Row>
                                        </Tab.Container>
                                    </Tab>
                                ))
                            }
                        </Tabs>
                )
            }
            </Container>
        </React.Fragment>
    );
}
 
export default ChallengesBattlePass;