import React from 'react';
import {HiSun , HiMoon} from 'react-icons/h1';
import { ThemeContext } from '../context/themeContext';

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext);
  
    return (
      <div className='p-2'>
        {theme === 'dark' ? (
          <div className='flex items-center cursor-pointer' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <HiSun className='text-primary text-2xl mr-2' /> Light Mode
          </div>
        ) : (
          <div className='flex items-center cursor-pointer' onClick={()=> setTheme(theme === 'dark' ? 'light' : 'dark')}>
            <HiMoon className='text-primary text-2xl mr-2' /> Dark Mode
          </div>
        )}
      </div>
    );
  };

export default ThemeToggle