import React, { Component } from 'react';
import LoginForm from '../LoginForm/LoginForm';
import SignupForm from '../SignupForm/SignupForm';


import { Button, Header, Modal} from 'semantic-ui-react'
import './Home.css';

class Home extends Component {

  constructor(props) {
    super();

  }

  render() {
    return (
      <div>
        <section className="landing">
          <h2 className="welcome">Welcome to in-Check!</h2>
          <div className="login-signup">
            <div className="login-box">
              <h4>Login</h4>
              <p>Here is where you login.</p>
              <Modal size="mini" trigger={<Button color="green">Log In</Button>}>
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
              <Modal size="mini" trigger={<Button color="green">Log In</Button>}>
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
        <section>

        </section>
      </div>
    )
  }

}

export default Home;
