import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { Icon } from 'semantic-ui-react'
import './Account.css';


export default class DeckDetail extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div className="container">
        <section className='group'>
          <Icon name="edit" size="large"/>
          <h1>Alex Read</h1>
        </section>
        <section className='group'>
          <Icon name="edit" size="large"/>
          <h2>alexread730@gmail.com</h2>
        </section>
        <section className='group'>
          <Icon name="edit" size="large"/>
          <h2>4147588814</h2>
        </section>
      </div>

    )

  }
}
