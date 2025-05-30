import React, { useState } from "react";

function ShowAlert() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState(" ")

    function SetName (){
    // const yourName = prompt("What is your name");
    setName(yourName)
    }

    function IncreaseCount(){
        setCount(count + 1)
    }

    function  DecreaseCount (){
        setCount(count - 1)
    }
    
    function ResetCount (){
        setCount(0)
    }


    // reset the count back to 0


  // function handleClick(){
  //     alert("Hello, this is an alert message!");
  // }

  return (
    <>
    <h1>Your name is:{name}</h1>
     <button onClick={SetName}>Check your name</button>
      <h1>{count}</h1>
      <button onClick={DecreaseCount}>Decrease Count</button>
      <button onClick={ResetCount}>Reset</button>
      <button onClick={IncreaseCount}>Increase Count</button>
      {/* <button onClick={handleClick}>Show ALert</button> */}
    </>
  );
}

export default ShowAlert;
