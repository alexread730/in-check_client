import { FETCH_ONE_DECK } from '../actions/index';
import { DELETE_CARD } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_ONE_DECK:
      return [ action.payload.data ];
    case DELETE_CARD:
      let newState = [state[0].filter(card => {
        return (card.id !== action.payload.data.card);
      })]

      return newState;
    default:
      return state;
  }

}
