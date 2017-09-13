import { FETCH_ONE_DECK } from '../actions/index';

export default function(state = [], action) {
  console.log(action);
  switch (action.type) {
    case FETCH_ONE_DECK:
      return [ action.payload.data ];
    default:
      return state;
  }

}
