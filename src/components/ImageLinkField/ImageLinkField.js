import React from 'react';

const ImageLinkField = () => {
  return (
    <div className="center">
      <h1>Discover your new color palette! Upload an image link below: </h1>
      <div style={{display:"flex", width: "50%"}} className="pa4 br3 shadow-5">

        <input type="text" className="w-two-thirds pa2"/>
        <button className="button w-third grow link f4 pv2 light-purple">Submit</button>
      </div>
    </div>
  );

}

export default ImageLinkField;