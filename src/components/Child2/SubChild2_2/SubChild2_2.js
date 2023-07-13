import React, {useContext} from 'react';
import {Context} from "../../../App";

const SubChild22 = () => {
   const context = useContext(Context);
    return (
        <div>
            <h4>SubChild22</h4>
            {/*context.*/}
            <button onClick={() => context.push('SubChild22')}>push info</button>
        </div>
    );
};

export {SubChild22};