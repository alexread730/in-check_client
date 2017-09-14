import { combineReducers } from 'redux';
import DecksReducer from './reducer_decks';
import CardsReducer from './reducer_cards';
import DeckInfoReducer from './reducer_deck_info';
import IntervalReducer from './reducer_interval';

const rootReducer = combineReducers({
  decks: DecksReducer,
  cards: CardsReducer,
  deckInfo: DeckInfoReducer
});

export default rootReducer;
