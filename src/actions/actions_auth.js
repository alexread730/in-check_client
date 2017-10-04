import axios from 'axios';

import { ROOT_URL } from '../RootURL';
const url = ROOT_URL + '/auth';

export const UPDATE_SIGN_UP_FORM = 'UPDATE_SIGN_UP_FORM';
export const SEND_SIGN_UP_CRED = 'SEND_SIGN_UP_CRED';
export const UPDATE_LOG_IN_FORM = 'UPDATE_LOG_IN_FORM';
export const SEND_LOG_IN_CRED = 'SEND_LOG_IN_CRED';

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

export const updateLogInForm = ({property}, value) => {
  return {
    type: UPDATE_LOG_IN_FORM,
    payload: {
      property,
      value
    }
  };
};

export function sendLogInCredentials(creds) {
  const request = axios.post(`${url}/login`, creds);
  return {
    type: SEND_LOG_IN_CRED,
    payload: request
  };
}
