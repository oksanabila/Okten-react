import React, {useState} from 'react';

function useArray(defaultValue) {
    const [array, setArray] = useState(defaultValue);

    const add = (item) => {
        setArray((prevArray) => [...prevArray, item]);
    };

    const remove = (id) => {
        setArray((prevArray) => prevArray.filter((item) => item.id !== id));
    };

    return {
        array,
        add,
        remove,
    };
}

export default useArray;