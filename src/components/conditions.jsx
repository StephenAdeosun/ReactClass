import React, { useState } from "react";
function Conditions({ views, desc }){
    // const [name, setName] = useState("")

    // const yourName = prompt("What is your name?")
    // if (yourName === ""){
    //     alert("Please enter a name")
    // }
    // else{
    //     setName(yourName)
    // }
    return (
        <div  className="text-red-400 text-[12px] md:text-[22px] lg:text-[42px]  font-[900] bg-[#000000]  flex">
           <h1 >{views}</h1>
           <p>{desc}</p>
            {/* { views > 10000000 ? `You are a superstar  with ${views} views` : `You are an upcoming star with ${views} views`}

            {/* { views > 10000000 ? `You are a superstar  with ${views} views` : `You are an upcoming star with ${views} views`}


            { weather === "sunny" && <h1>It is a sunny day</h1>}
            { weather === "rainy" && <h1>It is a rainy day</h1>}
            { weather === "cloudy" && <h1>It is a cloudy day</h1>}
            { weather === "snowy" && <h1>It is a snowy day</h1>}
            { weather === "windy" && <h1>It is a windy day</h1>}
            { weather === "stormy" && <h1>It is a stormy day</h1>}
            { weather === "foggy" && <h1>It is a foggy day</h1>} */}

        </div>
    )
     
        

}

export default Conditions