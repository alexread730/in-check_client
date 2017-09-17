import { FETCH_DECK_INFO } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_DECK_INFO:
      return [ action.payload.data[0] ];
    default:
      return state;
  }

}
