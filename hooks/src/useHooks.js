import React, { useState } from 'react'

const Hooks = () => {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => {
                setCount(count + 1);
                console.log();
            }}>Yamate Kudasai</button>
        </>
  )
}

export default Hooks