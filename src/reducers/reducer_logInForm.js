import { UPDATE_LOG_IN_FORM,
  SEND_LOG_IN_CRED,
  SEND_SIGN_UP_CRED,
  CHANGE_PHONE_ERROR } from '../actions/actions_auth';

import { FETCH_ACCOUNT } from '../actions/index';
import setAuthorizationToken from '../common';

const INITIAL_STATE = {
  email: '',
  password: '',
  loggedIn: false,
  firstName: '',
  lastName: '',
  phone: null,
  error: null
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case UPDATE_LOG_IN_FORM:
      return {
        ...state,
        [action.payload.property]: action.payload.value
      }
    case SEND_LOG_IN_CRED:
      if (action.error === true) {
        return {
          ...state,
          loggedIn: false,
          error: action.payload.response.data.message
        }
      } else {
        const token = action.payload.data.token;
        const id = action.payload.data.id;
        localStorage.setItem('Token', token);
        localStorage.setItem('UserID', id);

        setAuthorizationToken(token);
        window.location.reload();
        return {
          ...state,
          loggedIn: true,
          error: null
        }
      }
    case FETCH_ACCOUNT:
      return {
        ...state,
        firstName: action.payload.data[0].firstName,
        lastName: action.payload.data[0].lastName,
        phone: action.payload.data[0].phone,
        email: action.payload.data[0].email
      }
    case SEND_SIGN_UP_CRED:
      if (action.error === true) {
        return {
          ...state,
          loggedIn: false,
          error: action.payload.response.data.message
        }
      } else {
        const token = action.payload.data.token;
        const id = action.payload.data.id;
        localStorage.setItem('Token', token);
        localStorage.setItem('UserID', id);

        setAuthorizationToken(token);
        window.location.reload();
        return {
          ...state,
          loggedIn: true,
          error: null
        }
      }
    case CHANGE_PHONE_ERROR:
      console.log(action);
      if (action.payload === true) {
        return {
          ...state,
          loggedIn: false,
          error: `Enter a 10 digit phone number with no special characters.`
        }
      }

    default:
      return state;
  }

}
