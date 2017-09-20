import axios from 'axios';

import { ROOT_URL } from '../RootURL';
const url = ROOT_URL + 'accounts/1/decks';

export const UPDATE_INTERVAL = 'UPDATE_INTERVAL';
export const EDIT_DECK = 'EDIT_DECK';
export const UPDATE_DECK_FORM = 'UPDATE_DECK_FORM';
export const RESET_FORM = 'RESET_FORM';
export const CREATE_DECK = 'CREATE_DECK';
export const UPDATE_ADD_DECK_FORM = 'UPDATE_ADD_DECK_FORM';

export function updateDeckInterval(id, interval) {
  const request = axios.put(`${url}/${id}`, {
    "interval": interval
  });
  return {
    type: UPDATE_INTERVAL,
    payload: request
  };
}

export function editDeckInterval(props) {
  const request = axios.put(`${url}/${props.deck_id}`, props);
  return {
    type: EDIT_DECK,
    payload: request
  };
}

export const changeDeckForm = ({property}, value) => {
  return {
    type: UPDATE_DECK_FORM,
    payload: {
      property,
      value
    }
  };
};

export const updateAddDeckForm = ({property}, value) => {
  return {
    type: UPDATE_ADD_DECK_FORM,
    payload: {
      property,
      value
    }
  };
};

export function addDeck(deck) {
  const today = new Date();
  const dayNumber = today.getDay();
  deck['day_id'] = dayNumber;
  const request = axios.post(`${url}`, deck);

  return {
    type: CREATE_DECK,
    payload: request
  }
}

export const resetForm = () => {
  return {
    type: RESET_FORM,
    payload: {
      deck_id: 0,
      deckName: '',
      deckDesc: '',
      startTime: 0,
      endTime: 23,
      deckDays: []
    }
  }
}
