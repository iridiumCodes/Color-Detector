import React from 'react';
import './ImageLinkField.css';

const ImageLinkField = ({onInputChange}) => {
  return (
    <div className="center tc">
      <h1>Discover your new color palette! Upload an image link below: </h1>
      <div style={{display:"flex", width: "75%"}} className="bg-gradient pa4 ma4 br3 shadow-5">
        <input type="text" className="w-two-thirds pa2" onChange={onInputChange}/>
        <button className="button w-third grow link f4 pv2 light-purple tc">Detect</button>
      </div>
    </div>
  );

}

export default ImageLinkField;