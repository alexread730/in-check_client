import { UPDATE_LOG_IN_FORM, SEND_LOG_IN_CRED } from '../actions/actions_auth';
import setAuthorizationToken from '../common';
import axios from 'axios';

const INITIAL_STATE = {
  email: '',
  password: ''
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
        ...state
      }
    default:
      return state;
  }

}
