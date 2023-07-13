import React from 'react';
import {SubChild11} from "./SubChild1_1/SubChild1_1";
import {SubChild12} from "./SubChild1_2/SubChild1_2";

const Child1 = () => {
    return (
        <div>
            <h2>Child1</h2>
            <div className={'grid'}>
                <SubChild11/>
                <SubChild12/>
            </div>

        </div>
    );
};

export {Child1};