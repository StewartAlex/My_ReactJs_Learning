import React from 'react'
import { useState } from 'react';

// let number = 0;

export default function Counter() {

    // format 
    // // const [Array Destructuring] = useState{global Value}

    let [number, setNumber] = useState(0);

    function add_Num(e) {
        e.stopPropagation();
        // number++;

        // the prefere style for updating the UI is like that

        // setNumber(number+1);
        setNumber(number=>number+1);
        
        // console.log(number);
    }
    return (
        <>
            <h1>{number}</h1>
            <button className='Play_btn' onClick={add_Num}>Add No</button>
        </>
    )
}
