import React from 'react';

const Swatches = ({ colors }) => {
  console.log(colors);
  for (var color of colors) {
    console.log(`Color: ${color.raw_hex}  Probability: ${color.value}`); // go through response and find hex value for each entry in the array
  }
  return (
    <div className="center pa3">
      <h2>Returned Swatches</h2>
      {/* <ul>
        <li>
          colors.map(color => ( <li key={color.raw_hex}>{color.value}</li> ));
        </li>
      </ul> */}
    </div>
  );
};

export default Swatches;
