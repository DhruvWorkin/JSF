import React from 'react'

const Faculty = () => {
    var objFac = [
      { id: 1, name: "Dhruv", age: 35 },
      { id: 2, name: "Darshan", age: 38 },
      { id: 3, name: "Keval", age: 42 },
      { id: 4, name: "Padmanabh", age: 48 },
    ];
    return (
      <>
        {objFac.map((item) => (
          <p>
            {item.id} : {item.name}, Age : {item.age}
          </p>
        ))}
      </>
    );
}
export default Faculty