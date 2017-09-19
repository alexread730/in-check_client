import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
// import { Menu } from 'semantic-ui-react';
import './Header.css';


class Header extends Component {
  //
  //   state = {}
  //
  // handleItemClick = (e, { name }) => this.setState({ activeItem: name })


  render() {
    // const { activeItem } = this.state
    return (
      <div className="header">
        <div className="logo">
          <NavLink to="/" exact activeStyle={{
            color: '#290C31'
          }}>
            <h2 className="logo">in-Check</h2>
          </NavLink>
        </div>
        <ul className="nav-elements">
          <li><NavLink to="/decks" exact
            activeStyle={{
              color: '#290C31'
            }}
              className="nav-link">Decks</NavLink></li>
          <li><NavLink to="/account" exact
            activeStyle={{
                color: '#290C31'
            }}
              className="nav-link">Account</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Header;
