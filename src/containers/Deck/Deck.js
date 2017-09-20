import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { fetchDeckCards } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Label } from 'semantic-ui-react'
import './Deck.css';

class Deck extends Component {

  constructor(props) {
    super();
  }

  componentDidMount() {
    this.props.fetchDeckCards(this.props.details.deck_id);
  }


  render() {
    if (this.props.cards[0]) {
      return(
          <Link to={`deck-detail/${this.props.details.deck_id}`} key={this.props.details.name} className="deck-item">
            <h2>{this.props.details.deck_name}</h2>
            <p>{this.props.details.description}</p>
            <div className="bottom-card">
              <Label className="tag" as='' color='blue' tag>{this.props.details.category_name}</Label>
              <h3 className="deck-cards">{this.props.cards[0].length} Cards</h3>
            </div>
          </Link>
      )
    } else {
      return (
        <h2>Please Wait</h2>
      )
    }

  }
}

function mapStateToProps({ cards }) {
  return { cards }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDeckCards }, dispatch);
}

//Promote DeckList to container - needs access to dispatch method 'selectDeck', making it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(Deck);
