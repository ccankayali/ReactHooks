import React, {useRef} from 'react'
import ReactDOM from "react-dom/client";

function Render() {
    const inputElement = useRef();
    const focusInput = () => {
        inputElement.current.focus();
    }

  return (
    <>
        <input type='text' ref={inputElement} />
        <button onClick={focusInput}>Odaklan</button>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Render />);
export default Render