import React from 'react';

const Swatches = ({ colors }) => {
  console.log(colors);
  // const entries = Object.entries(colors);
  // console.log(entries);
  if (colors.length) {
    return (
      <>
        <h2>Colors Detected:</h2>
        {colors.map((color) => (
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
  } else {
    return null;
  }
};
// colorsArray.sort((a, b) =>
//   a.value > b.value ? -1 : b.value > a.value ? 1 : 0
// );
export default Swatches;
