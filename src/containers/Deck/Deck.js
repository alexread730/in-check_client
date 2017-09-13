import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDecks } from '../../actions/index';
import { Link } from 'react-router-dom';
import './Deck.css';

class Deck extends Component {

  constructor(props) {
    super();
  }

  componentWillMount() {
    this.props.fetchDecks();
  }

  renderList(deckData) {
    console.log(deckData);
    return (
      deckData.map(data => {
        return (<Link to="/deck-detail" key={data.name} className="deck-item">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
        </Link>)
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

//Promote Deck to container - needs access to dispatch method 'selectDeck', making it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(Deck);
