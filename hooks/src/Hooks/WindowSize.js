import React, { useState, useEffect } from 'react'

function WindowSize() {
    const [width, setWidth] = useState(window.innerWidth); // genişlik
    const [height, setHeight] = useState(window.innerHeight); // yükseklik

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }
    , []); // bağımlılık boş kalır

  return (
    <div>
        <p>
            Pencere boyutu: {width} x {height}
            <button onClick={() => setWidth(width+10)}>Genişlet</button>
        </p>
    </div>
  )
}

export default WindowSize