import React, { useState } from "react";
 
//props allow extra data to be assosciated with elemetn from the beginning

const MyCounter = (props) => {

    // let countState = 69;
    const [countState, setCountState] = useState(0);

    console.log(props);
    
    function incCount() {
        // countState++;    data needs state hook
        setCountState(countState + props.incBy);
    }
    return (
       <div>
            <div>{countState}</div>
            <button onClick={incCount}>+{props.incBy}</button>
       </div>

    );
}
export default MyCounter;