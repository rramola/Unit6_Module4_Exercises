import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function Counter() {
  const [counter, startingValue] = useState(0);
  return(
    <div
     id="div"
     >

      <p>{counter}</p>
      <button onClick={() => startingValue(counter + 1)}>"click me"</button>
    </div>
  )
}


function App() {
  return (
    <Counter />
  );
}

export default App;
