import React from 'react';

import { Card, Badge } from 'react-bootstrap/';

const ItemBattlePass = ({itemBattlePass}) => {
    return (
        <Card 
            bg={itemBattlePass.battlepass === "free" ? "secondary" : "success"}
            text="light" 
            as="article"
            className="animated-card"
            data-testid="item-battle-pass"
        >
            <Card.Header className="text-center" as="h4" data-testid="item-battle-pass-header">{itemBattlePass.item.name}</Card.Header>
            <Card.Img variant="top" src={itemBattlePass.item.images.full_background} alt="" className="p-3" data-testid="item-battle-pass-picture"/>
            <Card.Body as="article">
                <Card.Text data-testid="item-battle-pass-text" as="p">{itemBattlePass.item.description}</Card.Text>
                <Badge variant="danger">{itemBattlePass.item.rarity.name}</Badge> {' '}
                <Badge variant="dark">{itemBattlePass.item.type.name}</Badge> {' '}
                <Badge data-testid="item-battle-pass-badge" variant={itemBattlePass.battlepass === "free" ? "info" : "warning"}>{itemBattlePass.battlepass === "free" ? "Gratis" : "Pase de Batalla"}</Badge>
            </Card.Body>
        </Card>
    );
}
 
export default ItemBattlePass;