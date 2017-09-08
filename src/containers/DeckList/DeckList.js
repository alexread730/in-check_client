import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DeckList.css';

class DeckList extends Component {

  renderList() {
    return this.props.decks.map((deck) => {
      return (
        <div key={deck.name} className="deck-item">{deck.name}</div>
      );
    });
  }

  render() {
    return(
      <section className="deck-list">
        {this.renderList()}
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps)(DeckList);
