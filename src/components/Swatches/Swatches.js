import React from 'react';

const Swatches = ({ colors }) => {
  console.log(colors);
  // const entries = Object.entries(colors);
  // console.log(entries);

  return (
    <>
      <h2 className="center">Colors Detected:</h2>
      {colors.map((color) => (
        // <div className="center pa2">
        <div
          key={color.value}
          className="mr4"
          style={{
            height: '40px',
            width: '80px',
            backgroundColor: color.raw_hex,
          }}
        >
          <div>{color.value}</div>
        </div>
      ))}
    </>
  );
};

export default Swatches;
