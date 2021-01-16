import React from 'react';

const Navigation = ({ onRouteChangeAgain }) => {
  return (
  <nav style={{display:'flex'}}>
    <p onClick = {onRouteChangeAgain} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
  </nav>
  );
}

export default Navigation