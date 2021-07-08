import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

import ChallengeItem from '../../components/options/challengesFortnite/ChallengeItem';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import thunk from 'redux-thunk';


const itemChallenge = {
   "name":"Recoge distintos tipos de armas",
   "enabled":true,
   "progressTotal":5,
   "reward":{
      "xp":30000
   }
};

const changeStatusChallenge = jest.fn();

test('<ItemBattlePass /> Verifica que el componente tenga la información con estado activa', () => {
   const initialState = {output:10}
   const middlewares = [thunk];
   const mockStore = configureStore(middlewares);
   let store = mockStore(initialState);
   render (<Provider store={store}>
      <ChallengeItem 
         itemChallenge={itemChallenge}
      />
   </Provider>);
   expect(screen.getByTestId('challenge-item-collection')).toBeInTheDocument();
   expect(screen.getByTestId('challenge-item-collection').tagName).toBe('SECTION');

   expect(screen.getByTestId('challenge-item')).toBeInTheDocument();
   expect(screen.getByTestId('challenge-item').tagName).toBe('ARTICLE');

   expect(screen.getByTestId('challenge-item-button-false')).toBeInTheDocument();
   expect(screen.getByTestId('challenge-item-button-false').tagName).toBe('BUTTON');
   expect(screen.getByTestId('challenge-item-button-false').textContent).not.toBeNull();
   expect(screen.getByTestId('challenge-item-button-false').textContent).toBe(' Sin completar');

   expect(screen.getByTestId('challenge-item-footer')).toBeInTheDocument();
   expect(screen.getByTestId('challenge-item-footer').tagName).toBe('FOOTER');
   expect(screen.getByTestId('challenge-item-footer').textContent).not.toBeNull();

   expect(screen.getByTestId('challenge-item-badge')).toBeInTheDocument();
   expect(screen.getByTestId('challenge-item-badge').tagName).toBe('SPAN');
   expect(screen.getByTestId('challenge-item-badge').textContent).not.toBeNull();

   const btn = screen.getByTestId('challenge-item-button-false');
   userEvent.click(btn);
});