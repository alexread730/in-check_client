import React, { Component } from 'react';


import { Button, Form} from 'semantic-ui-react'
import './SignupForm.css';


class SignupForm extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder='example@mail.com' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" />
        </Form.Field>
        <Form.Field>
          <label>Phone Number</label>
          <input placeholder='867-5309' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>


    )
  }
}

export default SignupForm;
