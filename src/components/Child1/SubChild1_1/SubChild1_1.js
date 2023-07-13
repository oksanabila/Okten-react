import React, {useContext} from 'react';
import {Context} from "../../../App";

const SubChild11 = () => {
    const data = useContext(Context);

    return (
        <div>
            <h4>SubChild11</h4>
            {
                data.map(item => <div key={item}>{item}</div>)
            }
        </div>
    );
};

export {SubChild11};