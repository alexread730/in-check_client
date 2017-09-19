import { combineReducers } from 'redux';
import DecksReducer from './reducer_decks';
import CardsReducer from './reducer_cards';
import DeckInfoReducer from './reducer_deck_info';
import editDeckReducer from './reducer_editDeck';
import newCardReducer from './reducer_newCard';

const rootReducer = combineReducers({
  decks: DecksReducer,
  cards: CardsReducer,
  deckInfo: DeckInfoReducer,
  deckForm: editDeckReducer,
  newCard: newCardReducer
});

export default rootReducer;
