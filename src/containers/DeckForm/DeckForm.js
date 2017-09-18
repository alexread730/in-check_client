import React, { Component } from 'react';
import { editDeckInfo, changeDeckForm } from '../../actions/actions_interval';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Icon, Form, Checkbox, Dropdown, Menu } from 'semantic-ui-react'

const options = [
  { key: 0, text: '12 AM', value: 0 },
  { key: 1, text: '1 AM', value: 1 },
  { key: 2, text: '2 AM', value: 2 },
  { key: 3, text: '3 AM', value: 3 },
  { key: 4, text: '4 AM', value: 4 },
  { key: 5, text: '5 AM', value: 5 },
  { key: 6, text: '6 AM', value: 6 },
  { key: 7, text: '7 AM', value: 7 },
  { key: 8, text: '8 AM', value: 8 },
  { key: 9, text: '9 AM', value: 9 },
  { key: 10, text: '10 AM', value: 10 },
  { key: 11, text: '11 AM', value: 11 },
  { key: 12, text: '12 AM', value: 12 },
  { key: 13, text: '1 PM', value: 13 },
  { key: 14, text: '2 PM', value: 14 },
  { key: 15, text: '3 PM', value: 15 },
  { key: 16, text: '4 PM', value: 16 },
  { key: 17, text: '5 PM', value: 17 },
  { key: 18, text: '6 PM', value: 18 },
  { key: 19, text: '7 PM', value: 19 },
  { key: 20, text: '8 PM', value: 20 },
  { key: 21, text: '9 PM', value: 21 },
  { key: 22, text: '10 PM', value: 22 },
  { key: 23, text: '11 PM', value: 23 },
]


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
            <Dropdown label="startTime" name="startTime" options={options} onChange={this.handleChange} type="dropdown" labeled item scrolling/>
          </Menu>
          <h5>End Time</h5>
          <Menu compact>
            <Dropdown label="endTime" name="endTime" options={options} onChange={this.handleChange} type="dropdown" labeled item scrolling/>
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
