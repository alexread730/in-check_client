import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DeckDetail.css';

class DeckDetail extends Component {
  render() {
    if (!this.props.deck) {
      return <div className="container">Select a deck to view contents.</div>;
    }

    return (
      <div className="container">
        <h3>Details for:</h3>
        <h2>{this.props.deck.name}</h2>
        <h4>cards: {this.props.deck.cards}</h4>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    deck: state.activeDeck
  };
}

export default connect(mapStateToProps)(DeckDetail);
