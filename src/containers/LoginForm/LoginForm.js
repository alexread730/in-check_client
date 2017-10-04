import React, { Component } from 'react';
import { sendLogInCredentials, updateLogInForm } from '../../actions/actions_auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { Button, Form, Message } from 'semantic-ui-react'
import './LoginForm.css';


class LoginForm extends Component {

  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(e) {
    this.props.sendLogInCredentials(this.props.logInForm);
  }

  handleChange(event) {
    this.props.updateLogInForm({property: event.target.name}, event.target.value);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        {(this.props.logInForm.error)
          ? (<Message negative>
            <Message.Header>{this.props.logInForm.error}</Message.Header>
          </Message>)
          : null  }
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder='example@mail.com' name="email" onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange}/>
        </Form.Field>
        <Button type='submit' onSubmit={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}

function mapStateToProps({ logInForm }) {
  return { logInForm }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateLogInForm, sendLogInCredentials }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
