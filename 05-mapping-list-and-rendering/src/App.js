import logo from './logo.svg';
import './App.css';


const animals = [
  "dog",
  "cat",
  "chicken",
  "cow",
  "horse",
]

function MyList() {
  let newList = animals.map((animal) => <ul>{animal}</ul>)
  return newList
}

function App() {
  return (
    <div className="App">
      <MyList />
    </div>
  );
}

export default App;
