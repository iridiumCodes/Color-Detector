import React from 'react';

const Swatches = ({ colors }) => {
  const colorsArray = colors.sort((a, b) =>
    a.value > b.value ? -1 : b.value > a.value ? 1 : 0
  ); //sort array based on value
  if (colorsArray.length) {
    return (
      <>
        <div className="item centerVertical">
          <div>
            <h2>Dominant Colors</h2>
          </div>
          <div className="flexContainer">
            {colorsArray.map((color) => (
              <>
                <div className="swatch">
                  <div
                    key={color.value}
                    style={{
                      height: Math.round(color.value * 100) + '%',
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
