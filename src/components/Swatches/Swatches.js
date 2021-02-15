import React from 'react';

const Swatches = ({ colors }) => {
  console.log(colors);
  // const entries = Object.entries(colors);
  // console.log(entries);
  if (colors.length) {
    return (
      <>
        <div className="item">
          <div>
            <h2>Dominant Colors</h2>
          </div>
          <div>
            {colors.map((color) => (
              <>
                <div className="swatch">
                  <div
                    key={color.value}
                    style={{
                      height: '40px',
                      width: '65px',
                      backgroundColor: color.raw_hex,
                    }}
                  ></div>
                  <div>
                    <p>{Math.round(color.value * 100) + '%'}</p>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
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
