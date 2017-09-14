import axios from 'axios';

const url = 'http://localhost:3000/api/v1/accounts/1/decks'

export const UPDATE_INTERVAL = 'UPDATE_INTERVAL';

export function updateDeckInterval(id, interval) {
  const request = axios.put(`${url}/${id}`, {
    "interval": interval
  });

  return {
    type: UPDATE_INTERVAL,
    payload: request
  };
}
