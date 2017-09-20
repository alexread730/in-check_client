import React, {Component} from 'react';
import {RootURL} from '../RootURL';
import { Route } from 'react-router-dom';

import Header from './Header/Header';
import DeckList from '../containers/DeckList/DeckList';
import DeckDetail from '../containers/DeckDetail/DeckDetail';
import Home from '../containers/Home/Home';
import Account from '../containers/Account/Account';

class App extends Component {


  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <Route exact path="/" component={Home} />
        <Route path="/decks" component={DeckList} />
        <Route name="deck-detail" path="/deck-detail/:deck_id" component={DeckDetail} />
        <Route path="/account" component={Account} />
      </div>
    );
  }
}

export default App;
