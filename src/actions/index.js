import axios from 'axios';

const url = 'http://localhost:3000/api/v1/accounts/1/decks'

export const FETCH_DECKS = 'FETCH_DECKS';
export const FETCH_ONE_DECK = 'FETCH_ONE_DECK';

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
