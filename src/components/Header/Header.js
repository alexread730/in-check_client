import React, { Component } from 'react';
import './Header.css';


class Header extends Component {

  render() {
    return (
      <div className="header">
        <div className="logo">
          <h2>Logo</h2>
        </div>
        <ul className="nav-elements">
          <li>Decks</li>
          <li>Account</li>
        </ul>
      </div>
    );
  }
}

export default Header;
