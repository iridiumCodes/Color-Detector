import React from 'react';

const Navigation = ({onRouteChange}) => {
  return (
    <nav style={{display: 'flex'}}>
      <p
        onClick={() => onRouteChange('signin')}
        className="f3 link dim black underline pa3 pointer">
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
