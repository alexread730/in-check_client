import React, { Component } from 'react';
import DeckDetail  from '../../containers/DeckDetail/DeckDetail';

export default class DeckList extends Component {

  constructor(props) {
    super();
  }

  render() {
    return(
      <section >
        <h1 className="title">Your Deck</h1>
        <div className="card-list">
          <DeckDetail />
        </div>
      </section>
    )
  }
}
