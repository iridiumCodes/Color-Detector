import React from 'react';

const ColorDetection = ({ imageUrl }) => {
  /*pass image URL as props in the ColorDetection Component */
  return (
    <div className="item">
      <img src={imageUrl} alt="" width="600px" height="auto" />
    </div>
  );
};

export default ColorDetection;
