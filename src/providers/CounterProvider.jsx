import { useState } from "react";
import CounterContext from "../context/CounterContext";

function CounterProvider({children}){
    const [count,setCount] = useState(0)

    const increment = () => setCount(prevCount => prevCount+1)
    const decrement = () => setCount(prevCount =>prevCount-1)

    return(
        <CounterContext.Provider value ={{increment,decrement,count}}>
            {children}
        </CounterContext.Provider>
    )
}
export default CounterProvider;