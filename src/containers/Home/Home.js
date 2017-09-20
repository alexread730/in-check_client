import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';


import { Button, Header, Modal, Icon } from 'semantic-ui-react'
import './Home.css';

class Home extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div>
        <section className="landing">
          <div className="login-signup">
            <div className="login-box">
              <h4>Login</h4>
              <p>Here is where you login.</p>
              <Modal size="mini" trigger={<Button color="blue">Log In</Button>}>
                <Modal.Header>Login</Modal.Header>
                <Modal.Content image>
                  <Modal.Description>
                    <Header></Header>
                    <LoginForm />
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
            <div className="signup-box">
              <h4>Sign-Up</h4>
              <p>Here is where you sign-up.</p>
              <Modal size="mini" trigger={<Button color="blue">Log In</Button>}>
                <Modal.Header>Sign-Up</Modal.Header>
                <Modal.Content image>
                  <Modal.Description>
                    <Header></Header>
                    <SignupForm />
                  </Modal.Description>
                </Modal.Content>
              </Modal>
            </div>
          </div>
        </section>
        <section className="articles">
          <article>
            <Icon name="folder open outline" size="huge" color="grey"/>
            <h2>Create</h2>
            <h4>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          </article>
          <article>
            <Icon name="comments outline" size="huge" color="grey"/>
            <h2>Interact</h2>
            <h4>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>
          </article>
          <article>
            <Icon name="mobile" size="huge" color="grey"/>
            <h2>Be Mobile</h2>
            <h4>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h4>

          </article>
        </section>
      </div>
    )
  }

}

export default Home;
