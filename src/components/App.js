import React, {Component} from 'react';
import {RootURL} from '../RootURL';

import DeckList from '../containers/DeckList/DeckList';

class App extends Component {


  render() {
    return (
      <div>
        <DeckList />
      </div>
    );
  }
}

export default App;
