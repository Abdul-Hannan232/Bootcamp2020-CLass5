import { useReducer } from "react"

const Child2 = () => {

    const reducer = (state, action) => {
        switch (action.type){
            case "INCREMENT": return state + 1;
            default: return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, 0);

    return(
        <>
            <h1>This is second child using Counter Reducer</h1>
            <h4>Value of reducer satte is: {state} </h4>
            <button onClick={ ()=> dispatch( {type: "INCREMENT"} ) } >Increment Reducer</button>
        </>
    )
}
export default Child2;