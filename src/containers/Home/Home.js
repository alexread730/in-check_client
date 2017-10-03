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
              <p>Log in with your existing account information</p>
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
              <p>Sign up and create a new free account with your personal phone number!</p>
              <Modal size="mini" trigger={<Button color="blue">Sign Up</Button>}>
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
            <h4>Leave your notecards at home! Create multiple study decks with terms, definitions, and hints to be tested on throughout the day.</h4>
          </article>
          <article>
            <Icon name="comments outline" size="huge" color="grey"/>
            <h2>Interact</h2>
            <h4>in-Check's back and forth texting dialogue helps you easily compare your response to the true definition.</h4>
          </article>
          <article>
            <Icon name="mobile" size="huge" color="grey"/>
            <h2>Stay Mobile</h2>
            <h4>in-Check sends all your study materials directly to your phone via text message. Bring your study materials wherever you go!</h4>

          </article>
        </section>
      </div>
    )
  }

}

export default Home;
