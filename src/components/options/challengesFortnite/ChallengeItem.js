import React from 'react';
import {useDispatch} from 'react-redux';
import { updateChallengeSelectedAction } from '../../../actions/challengesFortniteActions';

import { Card, Col, Badge, Button } from 'react-bootstrap/';

const ChallengeItem = ({itemChallenge}) => {

    const dispatch = useDispatch();
    const updateChallengeSelected = idChallenge => dispatch(updateChallengeSelectedAction(idChallenge));
    
    const changeStatusChallenge = (idChallenge) => {
        updateChallengeSelected(idChallenge);
    }

    return (
        <Col lg={6} md={6} className="mb-3" as="section" data-testid="challenge-item-collection">
            <Card bg="dark" text="light" as="article" className="animated-card" data-testid="challenge-item">
                <Card.Body as="article">
                    <Card.Title as="h4" data-testid="challenge-item-header">
                        {itemChallenge.name}
                    </Card.Title>
                    <Card.Text className="text-center" as="p">
                        {
                            itemChallenge.status ?
                                <Button data-testid="challenge-item-button-true" disabled={itemChallenge.enabled ? false : true} variant="success" size="sm" onClick={() => changeStatusChallenge(itemChallenge.id)}><i className="bi bi-check-circle"></i>
                                    {' '}Completada
                                </Button>
                            :
                                <Button data-testid="challenge-item-button-false" disabled={itemChallenge.enabled ? false : true} variant="danger" size="sm" onClick={() => changeStatusChallenge(itemChallenge.id)}><i className="bi bi-x-circle"></i>
                                    {' '}Sin completar
                                </Button>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer as="footer" data-testid="challenge-item-footer">
                        <small className="text-muted">
                        {
                            itemChallenge.reward.xp ? `Recompensa: ${itemChallenge.reward.xp} XP` : null
                        }</small>
                        {' '}<Badge variant={itemChallenge.enabled ? "info" : "warning"} data-testid="challenge-item-badge">{itemChallenge.enabled ? "Activa" : "Desactivada"}</Badge>
                </Card.Footer>
            </Card>
        </Col>
    );
}
 
export default ChallengeItem;