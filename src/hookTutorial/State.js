import React, {useState} from "react";

function State(){
    const [count, setCount] = useState(0);
    function increment(){
        setCount(count + 1)
    }
    function decrement(){
        setCount(count - 1)
    }
    function refresh(){
        setCount(count === 0)
    }
    return(
        <div>
            <button onClick={increment}>+</button>
            <span>{count}</span>
            <button onClick={decrement}>-</button>
            <button onClick={refresh}>Refresh</button>
        </div>
    )
}
export default State;