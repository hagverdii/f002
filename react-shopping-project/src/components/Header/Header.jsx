import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header className='header'>
      <div className='icon-wrapper'>
        <svg
          width='22'
          height='22'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
          className='cart-icon'
        >
          <circle cx='9' cy='21' r='1' />
          <circle cx='20' cy='21' r='1' />
          <path d='M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6' />
        </svg>
      </div>

      <div className='text-wrapper'>
        <h1 className='title'>Məhsul Mağazası</h1>
        <p className='subtitle'>React State Management Dərsi</p>
      </div>
    </header>
  );
};

export default Header;
