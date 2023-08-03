import React, {useState, useCallback} from 'react';

const TestUseCallback = () => {
    const [count, setCount] = useState(0);

    const expensiveCalculation = useCallback((number) => {
        console.log('Calculating .....');
        for (let i = 0; i < 1000000000; i++) {
            number += 1;
        }
        return number;
    }, []);

    const calculation = expensiveCalculation(count);

    const handleIncrement = () => {
        setCount((prevCount) => prevCount + 1);
    };

    return (
        <div>
            <h2>TestUseCallback Component</h2>
            <p>Count: {count}</p>
            <p>Calculation Result: {calculation}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    );
};

export default TestUseCallback;