import React from 'react';
import './ImageLinkField.css';

const ImageLinkField = ({onInputChange, onButtonDetect}) => {
  return (
    <container className="centerVertical">
      <div className="centerVertical tc">
        <h1>Discover your new color palette! Upload an image link below: </h1>
        <div className="w-two-thirds bg-gradient pa4 ma4 br3 shadow-5 center">
          <input type="text" className="w-two-thirds pa2" onChange={onInputChange}/>
          <button className="w-third grow link f4 pv2 light-purple tc" onClick={onButtonDetect}>Detect</button>
        </div>
      </div>
    </container>
  );

}

export default ImageLinkField;