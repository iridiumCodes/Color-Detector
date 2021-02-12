import React from 'react';

const Palettes = ({ name, palettes }) => {
  return (
    <div className="center pa3">
      <div className="black f3">
        {`${name}, these are your saved palettes:`}
      </div>
      <div className="black f1">
        {palettes}
        {/*TODO render saved palettes*/}
      </div>
    </div>
  );
};

export default Palettes;
