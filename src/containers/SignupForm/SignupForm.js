import React, { Component } from 'react';
import { sendSignUpCredentials, updateSignUpForm } from '../../actions/actions_auth';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';


import { Button, Form} from 'semantic-ui-react'
import './SignupForm.css';


class SignupForm extends Component {

  constructor(props) {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);

  }

  handleSubmit(e) {
    this.props.sendSignUpCredentials(this.props.signUpForm);
    // window.location.reload();
  }


  handleChange(event) {
    this.props.updateSignUpForm({property: event.target.name}, event.target.value);
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
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
          <input placeholder='867-5309' name="phone" onChange={this.handleChange} />
        </Form.Field>
        <Button type='submit' onSubmit={this.handleSubmit}>Submit</Button>
      </Form>
    )
  }
}

function mapStateToProps({ signUpForm }) {
  return { signUpForm }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateSignUpForm, sendSignUpCredentials }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
