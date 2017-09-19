import axios from 'axios';
import { ROOT_URL } from '../RootURL';
const url = ROOT_URL + 'accounts/1/decks';

export const FETCH_DECKS = 'FETCH_DECKS';
export const FETCH_ONE_DECK = 'FETCH_ONE_DECK';
export const FETCH_DECK_INFO = 'FETCH_DECK_INFO';
export const CREATE_CARD = 'CREATE_CARD';

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

export function createCard(id) {
  const request = axios.post(`${url}/${id}`);

  return {
    type: CREATE_CARD,
    payload: request
  }
}
