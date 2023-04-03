import React from 'react';
import logoSistemaSolar from '../images/logo-sistema-solar.png';

class Header extends React.Component {
  render() {
    return (
      <header>
        <img src={ logoSistemaSolar } alt="logo do site" className="header-img" />
      </header>
    );
  }
}

export default Header;
