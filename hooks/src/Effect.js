import React, { useEffect, useState } from "react";

const Effects = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Onload...");
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
          if (count > 5) {
            console.log("Count is greater than 5");
          }
        }}  
      >Yamate Kudasai</button>
    </>
  );
};

export default Effects;
