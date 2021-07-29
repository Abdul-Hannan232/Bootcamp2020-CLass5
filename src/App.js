import { useState } from 'react';
import { Context } from './CreateContext';
import Child1 from './child1';
import Child2 from './child2';
import './App.css';


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
      <Context.Provider value={ count } >
        <Child1 />
        <button onClick={ ()=> setCount(count + 1) } >Increment Counter</button>
      </Context.Provider>


      
      <Child2 />
      
    </>
  );
}

export default App;
