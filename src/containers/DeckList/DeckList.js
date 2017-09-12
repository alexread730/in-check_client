import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDecks } from '../../actions/index';
import './DeckList.css';

class DeckList extends Component {

  constructor(props) {
    super();
  }

  componentWillMount() {
    this.props.fetchDecks();
  }

  renderList(deckData) {
    console.log(deckData);

    return (
      deckData.map(data => {
        console.log(data);
        return (<div key={data.name} className="deck-item">{data.name}</div>)
      })
    )
  }

  render() {
    return(
      <section className="deck-list">
        {this.props.decks.map(this.renderList)}
      </section>
    )
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
