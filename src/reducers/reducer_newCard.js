import { UPDATE_CARD_FORM } from '../actions/index';

const INITIAL_STATE = {
  term: '',
  definition: '',
  hint: '',
  image: '',
  completed: false,
  deck_id: 0
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_CARD_FORM:
      return {
        ...state,
        [action.payload.property]: action.payload.value
      }
    default:
      return state;
  }

}
