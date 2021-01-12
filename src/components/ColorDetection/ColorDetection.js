import React from 'react';

const ColorDetection = ({ imageUrl }) => {  /*pass image URL as props in the ColorDetection Component */
  return (
    <div className='center'>
      <img src={imageUrl} alt=""/>
    </div>

  );

}

export default ColorDetection