import React, {Component} from 'react';
import {RootURL} from '../RootURL';

import DeckList from '../containers/DeckList/DeckList';
import DeckDetail from '../containers/DeckDetail/DeckDetail';

class App extends Component {


  render() {
    return (
      <div>
        <DeckList />
        <DeckDetail />
      </div>
    );
  }
}

export default App;
