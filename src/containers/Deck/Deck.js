import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Deck.css';

export default class Deck extends Component {

  constructor(props) {
    super();
  }


  render() {
    return(
        <Link to={`deck-detail/${this.props.details.id}`} key={this.props.details.name} className="deck-item">
          <h2>{this.props.details.name}</h2>
          <p>{this.props.details.description}</p>
        </Link>
    )
  }
}
