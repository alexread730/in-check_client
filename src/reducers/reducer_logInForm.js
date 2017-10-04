import { UPDATE_LOG_IN_FORM, SEND_LOG_IN_CRED } from '../actions/actions_auth';
import { FETCH_ACCOUNT } from '../actions/index';
import setAuthorizationToken from '../common';

const INITIAL_STATE = {
  email: '',
  password: '',
  loggedIn: false,
  firstName: '',
  lastName: '',
  phone: null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_LOG_IN_FORM:
      return {
        ...state,
        [action.payload.property]: action.payload.value
      }
    case SEND_LOG_IN_CRED:
      const token = action.payload.data.token;
      const id = action.payload.data.id;
      localStorage.setItem('Token', token);
      localStorage.setItem('UserID', id);

      setAuthorizationToken(token);

      return {
        ...state, loggedIn: true
      }
    case FETCH_ACCOUNT:
      console.log(action.payload);
      return {
        ...state,
        firstName: action.payload.data[0].firstName,
        lastName: action.payload.data[0].lastName,
        phone: action.payload.data[0].phone,
        email: action.payload.data[0].email
      }
    default:
      return state;
  }

}
