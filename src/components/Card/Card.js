import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Icon } from 'semantic-ui-react';
import { deleteCard } from '../../actions/index';
import './Card.css';

import { Checkbox } from 'semantic-ui-react'

class Card extends Component {

  constructor(props) {
    super();
    this.handleDelete = this.handleDelete.bind(this);

  }


  componentDidMount() {
    if (this.props.details.completed === true) {
      this.props.addCompleted();
    }
  }

  handleDelete() {
    this.props.deleteCard(this.props.deckInfo[0][0].deck_id, this.props.details.id)
  }

  render() {

    return(
        <div className="card-item">
          <h2 className="term">{this.props.details.term}</h2>
          <p className="def">{this.props.details.definition}</p>
          <p className="hint">Hint: {this.props.details.hint}</p>
          <Checkbox className="completed" label='Completed' checked={this.props.details.completed}/>
          <Button icon color={"blue"} size="mini" className="small-btn">
            <Icon name='edit' />
          </Button>
          <Button icon size="mini" color={"red"} onClick={this.handleDelete}>
            <Icon name='delete' />
          </Button>
        </div>
    )
  }
}

function mapStateToProps({ cards, deckInfo }) {
  return { cards, deckInfo }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ deleteCard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
