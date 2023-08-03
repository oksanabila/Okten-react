import { useState } from 'react';

export function useToggle(defaultValue) {
    const [value, setValue] = useState(defaultValue);

    const toggleValue = () => {
        setValue((prevValue) => !prevValue);
    };

    return [value, toggleValue];
}
