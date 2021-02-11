import React from 'react';

const ColorDetection = ({imageUrl, colors}) => {
  /*pass image URL as props in the ColorDetection Component */
  return (
    <div className="center ma">
      <div className="mt2">
        <img src={imageUrl} alt="" width="600px" height="auto" />
        <h1>The colors detected are: {colors}</h1>
      </div>
    </div>
  );
};

export default ColorDetection;
