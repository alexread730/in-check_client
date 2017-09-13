import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDeckCards } from '../../actions/index';
import './DeckDetail.css';

class DeckDetail extends Component {

  constructor(props) {
    super();
  }

  componentWillMount() {
    this.props.fetchDeckCards(this.props.match.params.deck_id);
  }

  render() {

    return (
      <div className="container">
        <h3>Details for:</h3>
      </div>
    );
  }
}

function mapStateToProps({ cards }) {
  return { cards }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDeckCards }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckDetail);
