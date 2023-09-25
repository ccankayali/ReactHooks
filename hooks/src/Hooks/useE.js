import React, { useEffect, useState } from 'react'

function useE() {
    const [count, setCount] = useState(0);
    useEffect(() => {
      document.title = [count];
    })

    return (
    <div>
        <p> 
        Sayaç:  {count} <br />
        <button onClick={() => setCount(count + 1)}>Arttır</button>
        </p>
    </div>
  )
}

export default useE