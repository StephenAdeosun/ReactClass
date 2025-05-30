import Conditions from "./conditions";
import Counter from "./counter";
function Home() {
    return (

<>
<Counter/>

<Conditions  views={1000000000} weather={"rainy"}/>

</>       
    )
}

export default Home;