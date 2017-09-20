import React, { Component } from 'react';


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
        <Button type='submit'>Submit</Button>
      </Form>

    )
  }
}

export default LoginForm;
