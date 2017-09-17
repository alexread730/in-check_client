import React, { Component } from 'react';
import { editDeckInfo, changeDeckForm } from '../../actions/actions_interval';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Icon, Form, Checkbox, Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 1, text: '5 min', value: 5 },
  { key: 2, text: '10 min', value: 10 },
  { key: 3, text: '15 min', value: 15 },
  { key: 4, text: '1 min', value: 1 },
]


class DeckForm extends Component {

  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // changeInterval(e, data) {
  //   console.log(data.value);
  //   this.props.updateDeckInterval(this.props.match.params.deck_id, data.value);
  //   this.props.fetchDeckInfo(this.props.match.params.deck_id);
  // }

  handleSubmit(e) {
    e.preventDefault();

  }

  handleChange() {

  }

  render() {
    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Checkbox  className="day-box" label='S' value={0}/>
          <Checkbox className="day-box" label='M' value={1}/>
          <Checkbox className="day-box" label='W' value={2}/>
          <Checkbox className="day-box" label='T' value={3}/>
          <Checkbox className="day-box" label='Th' value={4}/>
          <Checkbox className="day-box" label='F' value={5}/>
          <Checkbox className="day-box" label='Sat' value={6}/>
        </Form.Field>
        <Form.Field>
          <Menu compact>
            <Dropdown label="Inteval" defaultValue={10} placeholder='Interval' options={options} labeled simple item/>
          </Menu>
        </Form.Field>
        <Form.Field>
          <label>Deck Name</label>
          <input type="text" placeholder='Deck Name' className='deck-name' onChange={value => this.props.changeDeckForm({property: 'deck-name', value})} />
        </Form.Field>
        <Form.Field>
          <label>Deck Description</label>
          <input type="text" placeholder='Deck Description'/>
        </Form.Field>
        <Button type='submit' color="teal">Save</Button>
        <Button color="red">Cancel</Button>
      </Form>
    )
  }
}

function mapStateToProps({ deckForm }) {
  return { deckForm }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editDeckInfo, changeDeckForm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckForm);
