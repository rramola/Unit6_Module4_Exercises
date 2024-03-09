import './App.css';

let HelloWorld = () => {
  return (
    <div className="HelloWorldContainer">
      <h1>Hello World!</h1>
    </div>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <HelloWorld />
      </header>
    </div>
  );
}

export default App;
