import React from 'react';
import ThemeSwitcher from '../Buttons/index.js';
import Logo from '../../images/Logo.svg';

const Header = () => (
  <div className="head">
    <Logo className="logo" />
    <ThemeSwitcher />
  </div>
);

export default Header;
