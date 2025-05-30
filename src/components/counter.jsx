import React, {useState}  from 'react';

export default function Counter () {
    const [count, setCount] = useState(0);
    const [name, setName ]  = useState(" ");

    function CheckName (){
        let yourName = prompt("What is your name?");
        // console.log(yourName)
        setName(yourName)
    }

    const IncreaseCount = () =>{
        setCount(count+1)
    }
    const DecreaseCount = () =>{
        setCount(count-1)
    }
    const ResetCount = () =>{
        setCount(0)
    }
    
    
   
    return(
        <div>
            <p>{name}</p>
            <button onClick={CheckName}>Check Your Name</button>
            <h1>{count}</h1>
            <button onClick={IncreaseCount}>Increase Count</button>
            <button onClick={ResetCount}>Reset Count</button>
            <button onClick={DecreaseCount}>Decrease Count</button>



        </div>
    )
}


