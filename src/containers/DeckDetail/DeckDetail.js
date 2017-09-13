import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDeckCards } from '../../actions/index';
import { fetchDeckInfo } from '../../actions/index';

import Card from '../../components/Card/Card';
import { Checkbox } from 'semantic-ui-react'
import { Dropdown, Menu } from 'semantic-ui-react'
import './DeckDetail.css';

const options = [
  { key: 1, text: '5 min', value: 5 },
  { key: 2, text: '10 min', value: 2 },
  { key: 3, text: '15 min', value: 3 },
]

class DeckDetail extends Component {

  constructor(props) {
    super();
  }

  componentWillMount() {
    this.props.fetchDeckCards(this.props.match.params.deck_id);
    this.props.fetchDeckInfo(this.props.match.params.deck_id);
  }

  renderCards(cardData) {
    return (
      cardData.map(data => {
        return (
          <Card details={data}/>
        )
      })
    )
  }

  render() {

    if(this.props.deckInfo.length > 0 && this.props.cards.length > 0) {
          return (
            <div className="container">
              <section>
                <h1 className="title">{this.props.deckInfo[0].name}</h1>
                <section className="deck-details">
                  <h2>Cards: {this.props.cards[0].length}</h2>
                  <Checkbox label="Active" defaultChecked={true} toggle />
                  <Menu compact>
                    <Dropdown label="Inteval" placeholder='Interval' options={options} labeled simple item />
                  </Menu>
                </section>
              </section>
              <section>
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
  return bindActionCreators({ fetchDeckCards, fetchDeckInfo }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);
