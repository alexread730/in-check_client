import axios from 'axios';

const url = 'http://localhost:3000/api/v1/accounts/1/decks'

export const UPDATE_INTERVAL = 'UPDATE_INTERVAL';
export const EDIT_DECK = 'EDIT_DECK';
export const UPDATE_DECK_FORM = 'UPDATE_DECK_FORM';

export function updateDeckInterval(id, interval) {
  const request = axios.put(`${url}/${id}`, {
    "interval": interval
  });

  return {
    type: UPDATE_INTERVAL,
    payload: request
  };
}

export function editDeckInfo(props) {

  const request = axios.put(`${url}/${props.deck_id}`, props);

  return {
    type: EDIT_DECK,
    payload: props
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
