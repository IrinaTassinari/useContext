import { useContext } from "react"
import CounterContext from "../../context/CounterContext"

function CounterDisplay(){
    const {count} = useContext(CounterContext)
    return <h2>Счётчик: {count}</h2>
}


export default CounterDisplay