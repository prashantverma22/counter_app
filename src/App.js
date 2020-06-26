import React, {useState} from 'react';
import './App.css';

function App(){
  const [count, setCount] = useState(0);
  // count is a variable. 
  // setCount is a method responible for updating values of corresponding count variable.

  return(
    <div className="App">
      <header>
        <h1>Counter App</h1>
      </header>
     <h2>Current value of count is {count} </h2>
     <button onClick={ () => setCount(0)}>Reset</button>
     <button onClick={ () => ( count >= 100 ? setCount(100) : setCount(count + 1) ) }>+</button>
     <button onClick={ () => (count <= 1 ? setCount(1) : setCount(count-1) )}>-</button>
    </div>
  )
}

export default App;
