import { EDIT_DECK, UPDATE_DECK_FORM, RESET_FORM } from '../actions/actions_interval';

const INITIAL_STATE = {
  deck_id: 0,
  deckName: '',
  deckDesc: '',
  startTime: 0,
  endTime: 23,
  deckDays: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_DECK_FORM:
      return {
        ...state,
        [action.payload.property]: action.payload.value
      }
    case EDIT_DECK:
      return INITIAL_STATE;
    case RESET_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }

}
