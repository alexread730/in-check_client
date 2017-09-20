import { UPDATE_ADD_DECK_FORM } from '../actions/actions_interval';

const INITIAL_STATE = {
  name: '',
  description: '',
  private: true,
  active: false,
  creator_id: 1,
  category: ''
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_ADD_DECK_FORM:
      return {
        ...state,
        [action.payload.property]: action.payload.value
      }
    default:
      return state;
  }

}
