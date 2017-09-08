import React, { Component } from 'react';
import './SearchBar.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchDecks } from '../../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    console.log(event.target.value);
    this.setState({ term: event.target.value })
  }

  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchDecks(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="search-form">
        <input
          placeholder="Search for a study deck"
          className="search-input"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="submit-btn">
          <button type="submit" className="btn">Submit</button>
        </span>
      </form>
        );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchDecks }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
