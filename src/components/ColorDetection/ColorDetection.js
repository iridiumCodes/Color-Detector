import React from 'react';

const ColorDetection = ({ imageUrl }) => {  /*pass image URL as props in the ColorDetection Component */
  return (
    <div className='center ma'>
      <div className= 'mt2'>
        <img src={imageUrl} alt="" width='600px' height='auto' />
      </div>
    </div>

  );

}

export default ColorDetection