import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectDeck } from '../../actions/index';
import { bindActionCreators } from 'redux';
import './DeckList.css';

class DeckList extends Component {

  renderList() {
    return this.props.decks.map((deck) => {
      return (
        <div
          onClick={() => this.props.selectDeck(deck)}
          key={deck.name}
        className="deck-item">{deck.name}</div>
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
  // The return value here will be props in DeckList
  return {
    decks: state.decks
  }
}

//Anything returned from this function will be props on the DeckList container
function mapDispatchToProps(dispatch) {
  // Whenever selectDeck is called the result should be passed to all reducers
  return bindActionCreators({ selectDeck: selectDeck }, dispatch)
}

//Promote DeckList to container - needs access to dispatch method 'selectDeck', making it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
