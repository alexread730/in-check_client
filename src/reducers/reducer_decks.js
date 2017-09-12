import { FETCH_DECKS } from '../actions/index';

export default function(state = [], action) {
  console.log('action received', action);

  switch (action.type) {
    case FETCH_DECKS:
      return [ action.payload.data, ...state]
  }

  return state;
}
