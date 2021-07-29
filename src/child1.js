import { useContext } from "react"
import { Context } from "./CreateContext"

export const Child1 = () => {
    const value = useContext( Context );
    return(
        <>
            <h1>This is first child using Counter Context</h1>
            <h4>Counter value is: {value} </h4>
            
        </>
    )
}