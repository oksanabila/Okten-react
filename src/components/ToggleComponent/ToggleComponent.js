import React from 'react';
import {useToggle} from "../../hook/useToggle";

export const ToggleComponent = () => {
    const [isToggled, toggle] = useToggle(false);

    return (
        <div>
            <h2>ExampleComponent</h2>
            <p>Is Toggled: {isToggled ? 'true' : 'false'}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
};
