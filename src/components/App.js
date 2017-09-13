import React, {Component} from 'react';
import {RootURL} from '../RootURL';
import { Route } from 'react-router-dom';

import Header from './Header/Header';
import DeckList from './DeckList/DeckList';
import DetailsContainer from '../components/DetailsContainer/DetailsContainer';

class App extends Component {


  render() {
    return (
      <div>
        <Route path="/" component={Header} />
        <Route path="/decks" component={DeckList} />
        <Route path="/deck-detail" component={DetailsContainer} />
      </div>
    );
  }
}

export default App;
