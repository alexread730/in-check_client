import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDecks } from '../../actions/index';
import Deck from '../../containers/Deck/Deck';
import { Link } from 'react-router-dom';
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
