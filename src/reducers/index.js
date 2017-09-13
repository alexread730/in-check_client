import { combineReducers } from 'redux';
import DecksReducer from './reducer_decks';
import CardsReducer from './reducer_cards';

const rootReducer = combineReducers({
  decks: DecksReducer,
  cards: CardsReducer
});

export default rootReducer;
