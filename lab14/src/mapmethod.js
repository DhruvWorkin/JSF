import React from 'react'

const Map = () => {
    var Arr = [10,20,30,40,50];
  return (
    <>
          {Arr.map((item) =>(
              <p>{item}</p>
          ))}
    </>
  );
}

export default Map