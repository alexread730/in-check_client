import axios from 'axios';

const url = 'http://localhost:3000/api/v1/accounts/1/decks'

export const FETCH_DECKS = 'FETCH_DECKS';

export function fetchDecks() {
  const request = axios.get(url);
  
  return {
    type: FETCH_DECKS,
    payload: request
  };
}
