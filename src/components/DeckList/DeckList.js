import React, { Component } from 'react';
import Deck from '../../containers/Deck/Deck';
import './DeckList.css';

export default class DeckList extends Component {

  constructor(props) {
    super();
  }

  render() {
    return(
      <section >
        <h1 className="title">Decks</h1>
        <div className="deck-list">
          <Deck />
        </div>
      </section>
    )
  }
}
