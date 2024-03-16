import logo from './logo.svg';
import './App.css';



const jokes = [
  {
  id: 1,
  setup: "What's the best thing about a Boolean?",
  punchline: "Even if you're wrong, you're only off by a bit"
  },
  {
  id: 2,
  setup: "Why do programmers wear glasses?",
  punchline: "Because they need to C#"
  }
  ]


function App() {
  
  return (
    <div className="App">
        {jokes.map((joke) => (
          <p><h3>{joke.id}</h3>{joke.setup}<br></br>{joke.punchline}</p>
        ))}
    </div>
  );
}

export default App;
