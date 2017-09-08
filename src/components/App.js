import React, {Component} from 'react';
import {RootURL} from '../RootURL';

import DeckList from '../containers/DeckList/DeckList';
import DeckDetail from '../containers/DeckDetail/DeckDetail';
import SearchBar from '../containers/SearchBar/SearchBar';

class App extends Component {


  render() {
    return (
      <div>
        <SearchBar />
        <DeckList />
        <DeckDetail />
      </div>
    );
  }
}

export default App;
