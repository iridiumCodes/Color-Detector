import React from 'react';

const Swatches = ({ colors }) => {
  console.log(colors);
  // const entries = Object.entries(colors);
  // console.log(entries);

  return (
    <>
      <h2>Colors Detected:</h2>
      {colors.map((color) => (
        // <div className="center pa2">
        <>
          <div className="container">
            <div
              key={color.value}
              style={{
                height: '40px',
                width: '80px',
                backgroundColor: color.raw_hex,
              }}
            ></div>
            <div>
              <p>{color.value}</p>
            </div>
          </div>
        </>
      ))}
    </>
  );
};
// colorsArray.sort((a, b) =>
//   a.value > b.value ? -1 : b.value > a.value ? 1 : 0
// );
export default Swatches;
