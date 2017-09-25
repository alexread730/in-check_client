import axios from 'axios';

import { ROOT_URL } from '../RootURL';
const url = ROOT_URL + '/auth';

export const UPDATE_SIGN_UP_FORM = 'UPDATE_SIGN_UP_FORM';
export const SEND_SIGN_UP_CRED = 'SEND_SIGN_UP_CRED';

export const updateSignUpForm = ({property}, value) => {
  return {
    type: UPDATE_SIGN_UP_FORM,
    payload: {
      property,
      value
    }
  };
};

export function sendSignUpCredentials(creds) {
  const request = axios.post(`${url}/signup`, creds);
  return {
    type: SEND_SIGN_UP_CRED,
    payload: request
  };
}
