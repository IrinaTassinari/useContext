import { useContext } from "react"
import CounterContext from "../../context/CounterContext"

function DecrementBtn(){
    const {decrement} = useContext(CounterContext)
    return <button onClick={decrement}>-</button>
}


export default DecrementBtn