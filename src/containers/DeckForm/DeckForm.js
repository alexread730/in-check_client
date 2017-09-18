import React, { Component } from 'react';
import { editDeckInfo, changeDeckForm } from '../../actions/actions_interval';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { INTERVAL_OPTIONS, HOUR_OPTIONS } from '../../common';

import { Button, Icon, Form, Checkbox, Dropdown, Menu } from 'semantic-ui-react'


class DeckForm extends Component {

  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.props.changeDeckForm({property: 'deck_id'}, this.props.match.params.deck_id)
  }

  // changeInterval(e, data) {
  //   console.log(data.value);
  //   this.props.updateDeckInterval(this.props.match.params.deck_id, data.value);
  //   this.props.fetchDeckInfo(this.props.match.params.deck_id);
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.editDeckInfo(this.props.deckForm);
  }


  handleChange(event, data) {
    console.log(data);
    const daysArray = [...this.props.deckForm.deckDays]

    if (!data) {
      this.props.changeDeckForm({property: event.target.name}, event.target.value);
    } else if (data.type == "dropdown") {
      this.props.changeDeckForm({property: data.name}, data.value);
    } else if (data.type == "checkbox"){
     daysArray.push(data.value)
     this.props.changeDeckForm({property: data.name}, daysArray);
   }
  }

  render() {

    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Checkbox  className="day-box" label='S' name="deckDays" value={0} onChange={this.handleChange} />
          <Checkbox className="day-box" label='M' name="deckDays" value={1} onChange={this.handleChange}/>
          <Checkbox  className="day-box" label='Tues' name="deckDays" value={2} onChange={this.handleChange} />
          <Checkbox className="day-box" label='W' name="deckDays" value={3} onChange={this.handleChange}/>
          <Checkbox className="day-box" label='Th' name="deckDays" value={4} onChange={this.handleChange}/>
          <Checkbox className="day-box" label='F' name="deckDays" value={5} onChange={this.handleChange}/>
          <Checkbox className="day-box" label='Sat' name="deckDays" value={6} onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <h5>Start Time</h5>
          <Menu compact>
            <Dropdown label="startTime" name="startTime" options={HOUR_OPTIONS} onChange={this.handleChange} type="dropdown" labeled item scrolling/>
          </Menu>
          <h5>End Time</h5>
          <Menu compact>
            <Dropdown label="endTime" name="endTime" options={HOUR_OPTIONS} onChange={this.handleChange} type="dropdown" labeled item scrolling/>
          </Menu>
          <h5>Interval</h5>
          <Menu compact>
            <Dropdown label="interval" name="interval" options={INTERVAL_OPTIONS} onChange={this.handleChange} type="dropdown" labeled item scrolling/>
          </Menu>
        </Form.Field>
        <Form.Field>
          <label>Deck Name</label>
          <input type="text" placeholder='Deck Name' name="deckName" className='deck-name' onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Deck Description</label>
          <input type="text" placeholder='Deck Description' name="deckDesc" onChange={this.handleChange}/>
        </Form.Field>
        <Button type='submit' color="teal" onSubmit={this.handleSubmit}>Save</Button>
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
