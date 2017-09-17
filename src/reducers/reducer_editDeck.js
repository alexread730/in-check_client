import { EDIT_DECK, UPDATE_DECK_FORM } from '../actions/actions_interval';

const INITIAL_STATE = {
  deck_id: 0,
  deckName: '',
  deckDesc: '',
  starTime: 0,
  endTime: 23,

}

export default function(state = INITIAL_STATE, action) {
  console.log(action);
  switch (action.type) {
    case UPDATE_DECK_FORM:
      return {
        ...state,
        [action.payload.property]: action.payload.value
      }
    case EDIT_DECK:
      return [ action.payload.data ];
    default:
      return state;
  }

}
