import logo from './logo.svg';
import './App.css';



function Button(props){
  function handleClick(){
    alert(props.name)
  }
  return (
    <button onClick={handleClick}>{props.name}</button>
  )
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='buttons'>
          <Button name="button1" />
          <Button name="button2" />
          <Button name="button3" />
        </div>
      </header>
    </div>
  );
}


export default App;
