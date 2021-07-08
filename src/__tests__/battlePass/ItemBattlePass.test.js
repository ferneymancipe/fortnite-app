import { render, screen } from '@testing-library/react';

import ItemBattlePass from '../../components/options/battlePass/ItemBattlePass';
import '@testing-library/jest-dom/extend-expect';

const itemBattlePass = {
    "battlepass":"free",
    "item":{
       "type":{
          "name":"ESTANDARTE"
       },
       "name":"Ícono de estandarte",
       "description":"Un nuevo ícono para tu estandarte. Asígnalo en el casillero.",
       "rarity":{
          "name":"POCO COMÚN"
       },
       "images":{
          "full_background":"https://media.fortniteapi.io/images/cosmetics/51275616a12842a93e5fef181997624a/v2/info.es-419.png"
       },
    }
};

test('<ItemBattlePass /> Verifica que el componente tenga la información', () => {
   render (<ItemBattlePass 
      itemBattlePass={itemBattlePass}
   />);
   expect(screen.getByTestId('item-battle-pass')).toBeInTheDocument();
   expect(screen.getByTestId('item-battle-pass').tagName).toBe('ARTICLE');

   expect(screen.getByTestId('item-battle-pass-header')).toBeInTheDocument();
   expect(screen.getByTestId('item-battle-pass-header').tagName).toBe('H4');
   expect(screen.getByTestId('item-battle-pass-header').textContent).not.toBeNull();

   expect(screen.getByTestId('item-battle-pass-picture')).toBeInTheDocument();
   expect(screen.getByTestId('item-battle-pass-picture').tagName).toBe('IMG');

   expect(screen.getByTestId('item-battle-pass-text')).toBeInTheDocument();
   expect(screen.getByTestId('item-battle-pass-text').tagName).toBe('P');
   expect(screen.getByTestId('item-battle-pass-text').textContent).not.toBeNull();

   expect(screen.getByTestId('item-battle-pass-badge')).toBeInTheDocument();
   expect(screen.getByTestId('item-battle-pass-badge').tagName).toBe('SPAN');
   expect(screen.getByTestId('item-battle-pass-badge').textContent).not.toBeNull();
});