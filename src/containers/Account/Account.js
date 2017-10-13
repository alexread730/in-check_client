import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import setAuthorizationToken from '../../common';
import { fetchAccount } from '../../actions/index'

import { Icon, Button } from 'semantic-ui-react'
import './Account.css';

//need to figure out why logout button isn't on deployed version
//comment

class Account extends Component {

  constructor(props) {
    super();

  }

  componentDidMount() {
    this.props.fetchAccount();
  }

  handleSubmit(e) {
    localStorage.clear();
    setAuthorizationToken(false);
  }

  render() {
    if (!localStorage.UserID) {
      return (
        <div>
          <h3 className="container">Please log in.</h3>
        </div>
      )
    } else {
      return (
        <div className="container">
          <section className='group'>
            <Icon name="edit" size="large"/>
            <h1>{this.props.logInForm.firstName} {this.props.logInForm.lastName}</h1>
          </section>
          <section className='group'>
            <Icon name="edit" size="large"/>
            <h2>{this.props.logInForm.email}</h2>
          </section>
          <section className='group'>
            <Icon name="edit" size="large"/>
            <h2>{this.props.logInForm.phone}</h2>
          </section>
          <Link to="/"><Button type='submit' onClick={this.handleSubmit}>Log Out</Button></Link>
        </div>

      )
    }
  }
}


function mapStateToProps({ logInForm }) {
  return { logInForm }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchAccount }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Account);
