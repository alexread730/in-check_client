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
      // <Menu color={'blue'}
      //   size={"massive"}
      // className="ui.menu">
      //   <Menu.Item name='Logo' active={activeItem === 'logo'} onClick={this.handleItemClick}>
      //     Logo
      //   </Menu.Item>
      //   <Menu.Menu position='right'>
      //     <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>
      //       Decks
      //     </Menu.Item>
      //
      //     <Menu.Item name='help' active={activeItem === 'help'} onClick={this.handleItemClick}>
      //       Account
      //     </Menu.Item>
      //   </Menu.Menu>
      // </Menu>
    );
  }
}

export default Header;
