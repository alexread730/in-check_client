import React, { Component } from 'react';
import { editDeckInterval, changeDeckForm, resetForm, deleteDeck } from '../../actions/actions_interval';
import { fetchDecks } from '../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { INTERVAL_OPTIONS, HOUR_OPTIONS } from '../../common';
import { Link } from 'react-router-dom';

import { Button, Form, Checkbox, Dropdown, Menu, Icon, Modal, Header } from 'semantic-ui-react'


class DeckForm extends Component {

  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
  }

  componentDidMount() {
    const daysArray = this.props.deckInfo[0].map(deck => {
      return deck.day_id;
    })
    this.props.changeDeckForm({property: 'deck_id'}, this.props.match.params.deck_id);
    this.props.changeDeckForm({property: 'deckDays'}, daysArray);
    this.props.changeDeckForm({property: 'name'}, this.props.deckInfo[0][0].name)
    this.props.changeDeckForm({property: 'description'}, this.props.deckInfo[0][0].description)
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
     } else {
       const index = daysArray.indexOf(data.value);
       daysArray.splice(index, 1);
       this.props.changeDeckForm({property: data.name}, daysArray);
     }
   }
  }

  checkDays(day) {
    return this.props.deckForm.deckDays.find(value => {return value === day}) ? true : false
  }

  clickHandler(event) {
    event.preventDefault();
  }

  deleteHandler(event) {
    this.props.deleteDeck(this.props.deckInfo[0][0].deck_id)
    this.props.fetchDecks();
  }

  render() {

    return (

      <Form onSubmit={this.handleSubmit}>
        <Form.Field>
          <Checkbox  className="day-box" label='S' name="deckDays" value={1} onClick={this.handleChange}
            checked={this.checkDays(1)} />
          <Checkbox className="day-box" label='M' name="deckDays" value={2} onClick={this.handleChange}
            checked={this.checkDays(2)} />
          <Checkbox  className="day-box" label='Tues' name="deckDays" value={3} onChange={this.handleChange}
            checked={this.checkDays(3)}/>
          <Checkbox className="day-box" label='W' name="deckDays" value={4} onChange={this.handleChange}
            checked={this.checkDays(4)}/>
          <Checkbox className="day-box" label='Th' name="deckDays" value={5} onChange={this.handleChange}
            checked={this.checkDays(5)} />
          <Checkbox className="day-box" label='F' name="deckDays" value={6} onChange={this.handleChange}
            checked={this.checkDays(6)} />
          <Checkbox className="day-box" label='Sat' name="deckDays" value={7} onChange={this.handleChange}
            checked={this.checkDays(7)} />
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
          <input type="text" placeholder='Deck Name' name="deckName" className='deck-name' width={1} defaultValue={this.props.deckInfo[0][0].name} onChange={this.handleChange} autoComplete="off" />
        </Form.Field>
        <Form.Field>
          <label>Deck Description</label>
          <input type="text" placeholder='Deck Description' name="deckDesc" width={4} defaultValue={this.props.deckInfo[0][0].description} onChange={this.handleChange} autoComplete="off"/>
        </Form.Field>
        <Button type='submit' color="teal" onSubmit={this.handleSubmit}>Save</Button>
        <Modal trigger={<Button onClick={this.clickHandler}>Delete Deck</Button>} basic size='small'>
          <Header icon='archive' content='Archive Old Messages' />
          <Modal.Content>
            <p>Are you sure you want to delete this deck?</p>
          </Modal.Content>
          <Modal.Actions>
            <Button basic color='red' inverted>
              <Icon name='remove' /> No
            </Button>
            <Link to={"/decks"}><Button color='green' onClick={this.deleteHandler} inverted>
              <Icon name='checkmark' /> Yes
            </Button></Link>
          </Modal.Actions>
        </Modal>
      </Form>
    )
  }
}

function mapStateToProps({ deckForm, deckInfo }) {
  return { deckForm, deckInfo }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ editDeckInterval, changeDeckForm, resetForm, deleteDeck, fetchDecks }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckForm);
