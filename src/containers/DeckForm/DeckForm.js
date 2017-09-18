import React, { Component } from 'react';
import { editDeckInterval, changeDeckForm, resetForm } from '../../actions/actions_interval';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { INTERVAL_OPTIONS, HOUR_OPTIONS } from '../../common';

import { Button, Form, Checkbox, Dropdown, Menu } from 'semantic-ui-react'


class DeckForm extends Component {

  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    const daysArray = this.props.deckInfo[0].map(deck => {
      return deck.day_id;
    })
    this.props.changeDeckForm({property: 'deck_id'}, this.props.match.params.deck_id);
    this.props.changeDeckForm({property: 'deckDays'}, daysArray);
  }

  handleSubmit(e) {
    this.props.editDeckInterval(this.props.deckForm);
    window.location.reload();
  }


  handleChange(event, data) {
    const daysArray = [...this.props.deckForm.deckDays]

    if (!data) {
      this.props.changeDeckForm({property: event.target.name}, event.target.value);
    } else if (data.type === "dropdown") {
      this.props.changeDeckForm({property: data.name}, data.value);
    } else if (data.type === "checkbox"){
      if (!daysArray.find(value => {return value === data.value})) {
       daysArray.push(data.value)
       this.props.changeDeckForm({property: data.name}, daysArray);
      }
   }
  }

  render() {

    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Checkbox  className="day-box" label='S' name="deckDays" value={1} onChange={this.handleChange} />
          <Checkbox className="day-box" label='M' name="deckDays" value={2} onChange={this.handleChange}/>
          <Checkbox  className="day-box" label='Tues' name="deckDays" value={3} onChange={this.handleChange} />
          <Checkbox className="day-box" label='W' name="deckDays" value={4} onChange={this.handleChange}/>
          <Checkbox className="day-box" label='Th' name="deckDays" value={5} onChange={this.handleChange}/>
          <Checkbox className="day-box" label='F' name="deckDays" value={6} onChange={this.handleChange}/>
          <Checkbox className="day-box" label='Sat' name="deckDays" value={7} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field required>
          <h5>Start Time</h5>
          <Menu compact>
            <Dropdown label="startTime" name="startTime" options={HOUR_OPTIONS} onChange={this.handleChange} type="dropdown" placeholder="Start Time" labeled item scrolling/>
          </Menu>
          <h5>End Time</h5>
          <Menu compact>
            <Dropdown label="endTime" placeholder="End Time" name="endTime" options={HOUR_OPTIONS} onChange={this.handleChange} type="dropdown" labeled item scrolling/>
          </Menu>
          <h5>Interval</h5>
          <Menu compact>
            <Dropdown label="interval" placeholder="Interval" name="interval" options={INTERVAL_OPTIONS} onChange={this.handleChange} type="dropdown" labeled item scrolling/>
          </Menu>
        </Form.Field>
        <Form.Field>
          <label>Deck Name</label>
          <input type="text" placeholder='Deck Name' name="deckName" className='deck-name' width={1} onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Deck Description</label>
          <input type="text" placeholder='Deck Description' name="deckDesc" width={4} onChange={this.handleChange}/>
        </Form.Field>
        <Button type='submit' color="teal" onSubmit={this.handleSubmit}>Save</Button>
      </Form>
    )
  }
}

function mapStateToProps({ deckForm, deckInfo }) {
  return { deckForm, deckInfo }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editDeckInterval, changeDeckForm, resetForm }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckForm);
