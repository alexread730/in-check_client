import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import { Button, Form} from 'semantic-ui-react'
import './LoginForm.css';


class LoginForm extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <Form>
        <Form.Field>
          <label>Email</label>
          <input type="email" placeholder='example@mail.com' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input type="password" />
        </Form.Field>
        <Link to={'/decks'}><Button type='submit'>Submit</Button></Link>
      </Form>

    )
  }
}

export default LoginForm;
