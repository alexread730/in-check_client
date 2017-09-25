import axios from 'axios';
import { ROOT_URL } from '../RootURL';
const url = ROOT_URL + `/accounts/${localStorage.UserID}/decks`;

export const FETCH_DECKS = 'FETCH_DECKS';
export const FETCH_ONE_DECK = 'FETCH_ONE_DECK';
export const FETCH_DECK_INFO = 'FETCH_DECK_INFO';
export const CREATE_CARD = 'CREATE_CARD';
export const UPDATE_CARD_FORM = 'UPDATE_CARD_FORM';
export const DELETE_CARD = 'DELETE_CARD';


export function fetchDecks() {
  const request = axios.get(url);

  return {
    type: FETCH_DECKS,
    payload: request
  };
}

export function fetchDeckCards(id) {
  const request = axios.get(`${url}/${id}`);

  return {
    type: FETCH_ONE_DECK,
    payload: request
  };
}

export function fetchDeckInfo(id) {
  const request = axios.get(`${url}/${id}/info`);

  return {
    type: FETCH_DECK_INFO,
    payload: request
  };
}

export function addCard(card) {
  const request = axios.post(`${url}/${card.deck_id}/card`, card);

  return {
    type: CREATE_CARD,
    payload: request
  }
}

export function updateCardForm({property}, value) {
  return {
    type: UPDATE_CARD_FORM,
    payload: {
      property,
      value
    }
  }
}

export function deleteCard(id, card) {
  const request = axios.delete(`${url}/${id}/card/${card}`);
  return {
    type: DELETE_CARD,
    payload: request
  }
}
