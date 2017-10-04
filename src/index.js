import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import setAuthorizationToken from './common';

import './index.css';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom'
import rootReducer from './reducers/index';
import registerServiceWorker from './registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

setAuthorizationToken(localStorage.Token)

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
