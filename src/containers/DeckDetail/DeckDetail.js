import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDeckCards } from '../../actions/index';
import { fetchDeckInfo } from '../../actions/index';
import { updateDeckInterval } from '../../actions/actions_interval';

import Card from '../../components/Card/Card';
import DeckForm from '../DeckForm/DeckForm';
import NewCardForm from '../NewCardForm/NewCardFrom';
import { Checkbox } from 'semantic-ui-react'
import { Button, Header, Modal } from 'semantic-ui-react'
import './DeckDetail.css';


class DeckDetail extends Component {

  constructor(props) {
    super();

    this.state = {
      numCompleted: 1
    }

    this.renderCards = this.renderCards.bind(this);
    this.addCompleted = this.addCompleted.bind(this);
  }

  componentWillMount() {
    this.props.fetchDeckCards(this.props.match.params.deck_id);
    this.props.fetchDeckInfo(this.props.match.params.deck_id);
  }

  addCompleted() {
    const numCompleted = {...this.state};
    this.state.numCompleted = this.state.numCompleted + 1
    this.setState(
      numCompleted
    )
  }


  renderCards(cardData) {
    return (
      cardData.map(data => {
        return (
          <Card details={data} addCompleted={this.addCompleted}/>
        )
      })
    )
  }

  render() {

    if(this.props.deckInfo.length > 0 && this.props.cards.length > 0) {
          return (
            <div className="container">
              <section>
                {console.log(this.props.deckInfo)}
                <h1 className="title">{this.props.deckInfo[0][0].name}</h1>
                <section className="deck-details">
                  <h3>Cards Completed: {this.state.numCompleted}/{this.props.cards[0].length}</h3>
                  <Checkbox label="Active" defaultChecked={true} toggle />
                  <Modal trigger={<Button color="blue">Edit Deck</Button>}>
                    <Modal.Header>Edit Deck</Modal.Header>
                    <Modal.Content image>
                      <Modal.Description>
                        <Header></Header>
                        <DeckForm match={this.props.match}/>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </section>
              </section>
              <section>
                <div className="card-item new-card-trig">
                  <Modal trigger={<h3>Create New Card</h3>}>
                    <Modal.Header>Create Card</Modal.Header>
                    <Modal.Content image>
                      <Modal.Description>
                        <Header></Header>
                        <NewCardForm match={this.props.match}/>
                      </Modal.Description>
                    </Modal.Content>
                  </Modal>
                </div>
                {this.props.cards.map(this.renderCards)}
              </section>
            </div>
          )
    }

    return (
      <h2>please wait</h2>
    )
  }
}

function mapStateToProps({ cards, deckInfo }) {
  return { cards, deckInfo }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDeckCards, fetchDeckInfo, updateDeckInterval }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);
