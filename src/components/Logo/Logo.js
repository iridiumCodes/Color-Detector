import React from 'react';
import logo from './color-wheel.png';

const Logo = () => {
  return (
    <div className='ma3 m0' style={{display:'flex', justifyContent: 'flex-start'}}>
      <img src={logo} alt='Logo'/>
    </div>
  );


}

export default Logo;