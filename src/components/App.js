import React, {Component} from 'react';
import { Route, Redirect } from 'react-router-dom';

import Header from './Header/Header';
import DeckList from '../containers/DeckList/DeckList';
import DeckDetail from '../containers/DeckDetail/DeckDetail';
import Home from '../containers/Home/Home';
import Account from '../containers/Account/Account';

class App extends Component {


  render() {
    console.log(!localStorage.UserID);
    return (
      <div>
        <Route path="/" component={Header} />
        <Route exact path="/" render={() => (
          !localStorage.UserID ? (<Home />) : ( <Redirect to="/decks" />)
        )}/>
        {/* <Route path="/decks" component={DeckList} /> */}
        <Route exact path="/decks" render={() => (
          localStorage.UserID ? (<DeckList />) : ( <Redirect to="/" />)
        )}/>
        <Route name="deck-detail" path="/deck-detail/:deck_id" component={DeckDetail} />
        <Route path="/account" component={Account} />
      </div>
    );
  }
}

export default App;
