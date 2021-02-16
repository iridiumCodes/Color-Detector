import React from 'react';
import './ImageLinkField.css';

const ImageLinkField = ({ onInputChange, onButtonDetect }) => {
  return (
    <div className="centerVertical tc pa4">
      <h1>
        Discover your new color palette! <br />
        Upload an image link below
      </h1>
      <div className="w-two-thirds bg-gradient pa4 ma4 br3 shadow-5 center">
        <input
          type="text"
          className="w-two-thirds pa2 mr2 br2 bw1 hover-bg-light-gray"
          onChange={onInputChange}
          placeholder="Paste Image URL"
        />
        <button
          className="w-third grow link f4 pv2 dark-gray br2 bw1 b--dark-gray hover-bg-light-green button"
          onClick={onButtonDetect}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkField;
