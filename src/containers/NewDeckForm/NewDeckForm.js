import React, { Component } from 'react';
import { updateAddDeckForm, addDeck } from '../../actions/actions_interval';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Form } from 'semantic-ui-react'


class NewDeckForm extends Component {

  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // this.props.updateCardForm({property: 'deck_id'}, this.props.match.params.deck_id);
    // this.props.updateCardForm({property: 'deckDays'}, daysArray);
  }

  handleSubmit(e) {
    this.props.addDeck(this.props.newDeck);
    // window.location.reload();
  }


  handleChange(event) {
    this.props.updateAddDeckForm({property: event.target.name}, event.target.value);
  }

  render() {

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Field required>
          <label>name</label>
          <input type="text" placeholder='Computer Science' name="name" width={1} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field required>
          <label>Description</label>
          <input type="text" placeholder="Terms and concepts about computer science." name="description" className='deck-name' width={1} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field required>
          <label>Category</label>
          <input type="text" placeholder="Science" name="category" className='deck-name' width={1} onChange={this.handleChange} />
        </Form.Field>
        <Button type='submit' color="blue" onSubmit={this.handleSubmit}>Save</Button>
      </Form>
    )
  }
}

function mapStateToProps({ newDeck }) {
  return { newDeck }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateAddDeckForm, addDeck }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDeckForm);
