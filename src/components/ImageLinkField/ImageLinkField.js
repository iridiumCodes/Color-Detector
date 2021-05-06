import React from 'react';
import './ImageLinkField.css';

const ImageLinkField = ({ onInputChange, onButtonDetect }) => {
  return (
    <div className="centerVertical tc pa4">
      <h1>
        Discover your new color palette! <br />
        Paste an image URL below
      </h1>
      <div className="w-75 bg-c pa4 ma4 br3 shadow-5 inputContainer">
        <input
          type="text"
          className="w-50 pa2 mr2 br2 bw1 hover-bg-light-gray"
          onChange={onInputChange}
          placeholder="Paste Image URL"
        />
        <button
          className="w-50 w-25-m w-25-l grow link f4 pv2 mt2 dark-gray br2 bw1 b--dark-gray hover-bg-light-green button"
          onClick={onButtonDetect}
        >
          Detect
        </button>
      </div>
    </div>
  );
};

export default ImageLinkField;
