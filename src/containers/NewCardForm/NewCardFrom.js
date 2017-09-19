import React, { Component } from 'react';
import { updateCardForm, addCard } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Form } from 'semantic-ui-react'


class NewCardForm extends Component {

  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.updateCardForm({property: 'deck_id'}, this.props.match.params.deck_id);
    // this.props.updateCardForm({property: 'deckDays'}, daysArray);
  }

  handleSubmit(e) {
    this.props.addCard(this.props.newCard);
    window.location.reload();
  }


  handleChange(event) {
    this.props.updateCardForm({property: event.target.name}, event.target.value);
  }

  render() {

    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.Field required>
          <label>Term</label>
          <input type="text" placeholder='Dog' name="term" width={1} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field required>
          <label>Definition</label>
          <input type="text" placeholder="Man's best friend" name="definition" className='deck-name' width={1} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Hint</label>
          <input type="text" placeholder='Woof Woof' name="hint" className='deck-name' width={1} onChange={this.handleChange} />
        </Form.Field>
        <Button type='submit' color="teal" onSubmit={this.handleSubmit}>Save</Button>
      </Form>
    )
  }
}

function mapStateToProps({ newCard, deckInfo }) {
  return { newCard, deckInfo }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateCardForm, addCard }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCardForm);
