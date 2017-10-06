import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDecks } from '../../actions/index';
import NewDeckForm from '../NewDeckForm/NewDeckForm';

import { Icon, Modal, Header } from 'semantic-ui-react';
import  Deck from '../Deck/Deck'
import './DeckList.css';

// Commit double

class DeckList extends Component {

  constructor(props) {
    super();
  }

  componentWillMount() {
    this.props.fetchDecks();
  }

  renderList(deckData) {
    if (!localStorage.UserID) {
      return (
        <div>
          <h3 className="container">Loading...</h3>
        </div>
      )
    } else if (!deckData) {
      return null
    } else {
        return (
          deckData.map(data => {
            return (
              <Deck details={data}/>
            )
          })
        )
    }

  }

  handleClick() {

  }

  render() {
    if (!localStorage.UserID) {
      return (
        <div>
          <h3 className="container">Please Log In</h3>
        </div>
      )
    } else {
      return(
        <section >
          <h1 className="title">Your Decks</h1>
          <div className="deck-list">
            {this.props.decks.map(this.renderList)}
            <Modal trigger={
              <div className="add-deck">
                <h2>Create New Deck</h2>
                <Icon name="add circle" size="huge" color="grey" />
              </div>
            }>
              <Modal.Header>Create Deck</Modal.Header>
              <Modal.Content image>
                <Modal.Description>
                  <Header></Header>
                  <NewDeckForm match={this.props.match}/>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </div>
        </section>
      )
    }

  }
}

function mapStateToProps({ decks }) {
  return { decks }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDecks }, dispatch);
}

//Promote DeckList to container - needs access to dispatch method 'selectDeck', making it available as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
