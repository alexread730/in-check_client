import React, {Component} from 'react';
import {RootURL} from '../RootURL';
import { Route } from 'react-router-dom';

import Header from './Header/Header';
import DeckList from '../containers/DeckList/DeckList';
import DeckDetail from '../containers/DeckDetail/DeckDetail';
import Home from '../containers/Home/Home';

class App extends Component {


  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <Route path="/home" component={Home} />
        <Route path="/decks" component={DeckList} />
        <Route name="deck-detail" path="/deck-detail/:deck_id" component={DeckDetail} />
      </div>
    );
  }
}

export default App;
