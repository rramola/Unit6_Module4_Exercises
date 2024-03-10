import logo from './logo.svg';
import './App.css';


function Clicked() {
  alert("Clicked!");
}

function App() {
  return (
    <div className="App">
      <div>
        <button onClick={Clicked}>Press Me!</button>
      </div>
    </div>
  );
}

export default App;
