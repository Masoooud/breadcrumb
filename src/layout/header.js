import React from 'react';
import logo from './../logo.svg';

function Header(props) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h3> Breadcrumb Showing </h3>
    </header>
  );
}

export default Header;
