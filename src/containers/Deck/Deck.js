import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Label } from 'semantic-ui-react'
import './Deck.css';

export default class Deck extends Component {

  constructor(props) {
    super();
  }


  render() {
    return(
        <Link to={`deck-detail/${this.props.details.deck_id}`} key={this.props.details.name} className="deck-item">
          <h2>{this.props.details.deck_name}</h2>
          <p>{this.props.details.description}</p>
          <Label as='' color='blue' tag>{this.props.details.category_name}</Label>
        </Link>
    )
  }
}
