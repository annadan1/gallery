import React from 'react';
import cn from 'classnames';
import useTheme from '../../hooks/useTheme.js';
import IconThemeSwither from '../../images/ThemeSwitcherIcon.svg';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const fillIcon = cn(theme === 'dark' ? 'white' : 'black');

  return (
    <button className="btn button-theme" type="button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      <IconThemeSwither
        fill={fillIcon}
        className="theme-icon"
      />
    </button>
  );
};

export default ThemeSwitcher;
