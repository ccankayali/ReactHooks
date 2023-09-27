import React, { useRef, useEffect, useState } from 'react'
import ReactDOM  from 'react-dom/client';

function Sayac() {
    const [inputValue, setValue] = useState("");
    const count = useRef(0);
    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
    <>
        <input type='text' value={inputValue} onChange={(e) => setValue(e.target.value)} />
        <h1>Render Sayısı: {count.current}</h1>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Sayac />);
export default Sayac