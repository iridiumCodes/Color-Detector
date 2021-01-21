import React from 'react';
import { DivMode } from 'react-particles-js';

const Palettes = ({name, palettes}) => {
  return(
      <div>
        <div className = 'white f3'>
          {`${name}, these are your saved palettes:`}
        </div>
        <div className = 'white f1'>
          {palettes}
        </div>
      </div>
      
  )
}

export default Palettes;