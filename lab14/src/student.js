import React from 'react'

const Student = () => {
    var objStu = [
      { roll: 1, name: "Dhruv" },
      { roll: 2, name: "Darshan" },
      { roll: 3, name: "Keval" },
      { roll: 4, name: "Padmanabh" },
    ];
    return (
      <>
        {objStu.map((item) => (
          <p>
            {item.roll} : {item.name}
          </p>
        ))}
      </>
    );
}

export default Student