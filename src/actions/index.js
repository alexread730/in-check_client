import axios from 'axios';

const DECK_URL = 'https://swapi.co/api/people/?page=';

export function selectDeck(deck) {
  // selectDeck is an action creator, needs to return action (object w/ 'type' property) AKA type and payload
  return {
    type: 'DECK_SELECTED',
    payload: deck
  }
}

export const FETCH_DECKS = 'FETCH_DECKS';

export function fetchDecks(deck) {
  const url = `${DECK_URL}${deck}`
  const request = axios.get(url);

  return {
    type: FETCH_DECKS,
    payload: request
  };
}
