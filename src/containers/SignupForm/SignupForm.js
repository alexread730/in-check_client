import React, { Component } from 'react';
import { sendSignUpCredentials, updateSignUpForm, phoneError } from '../../actions/actions_auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Button, Form, Message } from 'semantic-ui-react'
import './SignupForm.css';


class SignupForm extends Component {

  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(e) {
    console.log('called fn');
    if (this.props.signUpForm.phone.match(/\d{10}/)) {
      this.props.sendSignUpCredentials(this.props.signUpForm);
    } else {
      this.props.phoneError(true);
    }
  }


  handleChange(event) {
    this.props.updateSignUpForm({property: event.target.name}, event.target.value);
  }

  render() {
    return (
      <Form>
        {(this.props.logInForm.error)
          ? (<Message negative>
            <Message.Header>{this.props.logInForm.error}</Message.Header>
          </Message>)
          : null  }
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' name="firstName" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' name="lastName" onChange={this.handleChange} />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder='example@mail.com' name="email" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" name="password" onChange={this.handleChange}/>
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <input placeholder='4148675309' name="phone" onChange={this.handleChange} />
        </Form.Field>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}

function mapStateToProps({ signUpForm, logInForm }) {
  return { signUpForm, logInForm }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSignUpForm, sendSignUpCredentials, phoneError }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
