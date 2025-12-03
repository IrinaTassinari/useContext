import { useContext } from "react"
import CounterContext from "../../context/CounterContext"

function IncrementBtn(){
    const {increment} = useContext(CounterContext)
    return <button onClick={increment}>+</button>
}


export default IncrementBtn