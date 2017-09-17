import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react'
import './Card.css';

import { Checkbox } from 'semantic-ui-react'

export default class Card extends Component {

  constructor(props) {
    super();

  }


  componentDidMount() {
    if (this.props.details.completed == true) {
      this.props.addCompleted();
    }
  }

  render() {

    return(
        <div className="card-item">
          <h2 className="term">{this.props.details.term}</h2>
          <p className="def">{this.props.details.definition}</p>
          <p className="hint">Hint: {this.props.details.hint}</p>
          <Checkbox label='Completed' checked={this.props.details.completed}/>
          <Button icon color={"teal"} size="mini">
            <Icon name='edit' />
          </Button>
          <Button icon size="mini" color={"red"}>
            <Icon name='delete' />
          </Button>
        </div>
    )
  }
}
