
import './App.css';
import React, {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
     <h1>Counter App</h1>
     <h2 style={count%2===0?{color:`green`}:{color:`red`}}>{count}</h2>
     <button onClick={() => setCount(count+1)}>Increment </button>
     <button onClick={() => setCount(count-1)}>Decrement</button>
     <button onClick={() => setCount(count*2)}>Double</button>
     <button onClick={() => setCount(0)}>Reset</button>
     
    </div>
  );
}

export default App;
