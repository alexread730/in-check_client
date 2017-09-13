import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default class Card extends Component {

  constructor(props) {
    super();
  }


  render() {
    return(
        <div className="card-item">
          <h2 className="term">{this.props.details.term}</h2>
          <p className="def">{this.props.details.definition}</p>
          <p className="hint">Hint: {this.props.details.hint}</p>
        </div>
    )
  }
}
