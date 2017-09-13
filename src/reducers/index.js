import { combineReducers } from 'redux';
import DecksReducer from './reducer_decks';
import CardsReducer from './reducer_cards';
import DeckInfoReducer from './reducer_deck_info';

const rootReducer = combineReducers({
  decks: DecksReducer,
  cards: CardsReducer,
  deckInfo: DeckInfoReducer
});

export default rootReducer;
