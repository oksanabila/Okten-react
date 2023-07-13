import React from 'react';
import {SubChild21} from "./SubChild2_1/SubChild2_1";
import {SubChild22} from "./SubChild2_2/SubChild2_2";

const Child2 = () => {
    return (
        <div>
            <h2>Child2</h2>
            <div className={'grid'}>
                <SubChild21/>
                <SubChild22/>
            </div>
        </div>
    );
};

export {Child2};