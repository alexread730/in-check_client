import { UPDATE_SIGN_UP_FORM, SEND_SIGN_UP_CRED } from '../actions/actions_auth';

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: 1,
  deckId: null,
  lastText: null,
  termSent: false,
  resCount: 0
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_SIGN_UP_FORM:
      return {
        ...state,
        [action.payload.property]: action.payload.value
      }
    case SEND_SIGN_UP_CRED:
    console.log(action.payload);
      return {
        ...state
      }
    default:
      return state;
  }

}
