import React from 'react'
import  WithCount  from './WithCount';


 const HoverCounter = (props) => {
    const {counter, incrementCounter} = props;

    return (
        <div>
            <button onMouseOver={incrementCounter}>Hover button</button>
            <p>
                Counter: {counter}
            </p>
        </div>
    )
}
export default WithCount(HoverCounter)
