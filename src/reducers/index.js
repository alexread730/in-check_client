import { combineReducers } from 'redux';
import DecksReducer from './reducer_decks';
import CardsReducer from './reducer_cards';
import DeckInfoReducer from './reducer_deck_info';
import editDeckReducer from './reducer_editDeck';
import newCardReducer from './reducer_newCard';
import newDeckReducer from './reducer_newDeck';
import signUpFormReducer from './reducer_signUpForm';
import logInFormReducer from './reducer_logInForm';

const rootReducer = combineReducers({
  decks: DecksReducer,
  cards: CardsReducer,
  deckInfo: DeckInfoReducer,
  deckForm: editDeckReducer,
  newCard: newCardReducer,
  newDeck: newDeckReducer,
  signUpForm: signUpFormReducer,
  logInForm: logInFormReducer
});

export default rootReducer;
