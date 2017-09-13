import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDecks } from '../../actions/index';
import  Deck from '../Deck/Deck'
import './DeckList.css';

class DeckList extends Component {

  constructor(props) {
    super();
  }

  componentWillMount() {
    this.props.fetchDecks();
  }

  renderList(deckData) {
    return (
      deckData.map(data => {
        return (
          <Deck details={data}/>
        )
      })
    )
  }

  render() {
    return(
      <section >
        <h1 className="title">Decks</h1>
        <div className="deck-list">
          {this.props.decks.map(this.renderList)}
        </div>
      </section>
    )
  }
}

function mapStateToProps({ decks }) {
  return { decks }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDecks }, dispatch);
}

//Promote DeckList to container - needs access to dispatch method 'selectDeck', making it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
