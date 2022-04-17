import React, { useState, useEffect } from 'react';



function UseEffect() {
    var [count, setCount] = useState(0)
    var [fruit, setFruit] = useState("")

    useEffect(() => {
        document.title = `You clicked that buttton ${count} times`
    })

    return(
        <>
            <h2>Learning React hooks : useState</h2>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Click me to cause an increment</button>

           <h2>{fruit}</h2>
           <button onClick={(e) => {
            e.preventDefault()
            setFruit("Paw-paw")
           }}>Set to Paw paw</button>
        </>
    )
}

export default UseEffect;