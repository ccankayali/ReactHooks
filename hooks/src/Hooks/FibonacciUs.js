import React, {useState} from 'react'

function FibonacciUs() {
    const [count, setCount] = useState(() => {
        const intialCount = 0;
        return intialCount;
    });
    const [fibonacci, setFibonacci] = useState(0); 

    function fib(n) {
        if (n < 0) return 0;
        if (n === 0 || n == 1) return n;
        let a = 0;
        let b = 1;
        let c;

        for(let i = 2; i <= n; i++) {
            c = a + b;
            a = b;
            b = c;
        }
        return c;
    }

    return (
    <div>
        <button onClick={() => {
        setCount(count + 1); 
        setFibonacci(fib(count + 1)); 
        }}>
        Click me
        </button>
        <div> Real Count  {count}</div>
        <div>Fibonacci Count  {fibonacci}</div>
        <button onClick={() => {
        setCount(count - 1); 
        setFibonacci(fib(count - 1)); 
        }}>
        Click me
        </button>
    </div>
  )
}

export default FibonacciUs