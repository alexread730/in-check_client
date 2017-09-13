import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DeckDetail.css';

class DeckDetail extends Component {
  render() {

    return (
      <div className="container">
        <h3>Details for:</h3>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    deck: state.activeDeck
  };
}

export default connect(mapStateToProps)(DeckDetail);
