import React, {useState, useMemo} from 'react';


export const TestUseMemo = () => {
    const [count, setCount] = useState(0);

    const expensiveCalculation = (number) => {
        console.log('Calculating ...');
        for (let i = 0; i < 1000000000; i++) {
            number += 1;
        }
        return number;
    };

    const calculation = useMemo(() => expensiveCalculation(count), [count]);
    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <h2>TestUseMemo Component</h2>
            <p>Count: {count}</p>
            <p>Calculation Result: {calculation}</p>
            <button onClick={handleIncrement}>Make count +1</button>
        </div>
    );
};
