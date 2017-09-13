import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
// import { Menu } from 'semantic-ui-react';
import './Header.css';


class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <ul className="nav-elements">
          <li><NavLink to="/decks" exact
            activeStyle={{
              color: 'grey'
            }}
              className="nav-link">Decks</NavLink></li>
          <li><NavLink to="/account" exact
            activeStyle={{
                color: 'grey'
            }}
              className="nav-link">Account</NavLink></li>
        </ul>
      </div>
    );
  }
}

export default Header;
