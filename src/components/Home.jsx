import Conditions from "./conditions";
import Counter from "./counter";
import React, { useState } from "react";
function Home() {
    const [views, setViews] = useState(10);
    return (
        <>
        <div className="flex flex-row justify-center  bg-gray-100"> 
             <Conditions views="3M" desc={"Active Users"}/>
             <Conditions views="60m" desc={"Links $ qer code"}/>
             <Conditions views="3b" desc={"rainy"}/>
             <Conditions views="3b" desc={"rainy"}/>
             <Conditions views="3b" desc={"rainy"}/>
      
        </div>
            <Counter/>

            {/* <Conditions views={views} desc={"rainy"}/> */}


            <button onClick={() => setViews(views + 1)}>Increase Views</button>
        </>
    );
}

export default Home;