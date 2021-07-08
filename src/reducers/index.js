import { combineReducers }from 'redux';
import challengesFortniteReducer from './challengesFortniteReducer';

export default combineReducers({
    challengesFortnite: challengesFortniteReducer
});