import logo from './logo.svg';
import './App.css';





function App() {
  const animals = [
    'dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'
  ];
  
  return (
    <div className='animals-container'>
       {animals.map((animal)=> (
          <div>{animal}</div>
        )
      )}
    </div>
  );
}
export default App;



// const myAnimals = [
//   'dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'
// ];
// function CreateAnimal({animalList}) {
//   let animals = animalList.map((animal) => 
//   <p>{animal}</p>
//  )
//   return(
//     <p>{animals}</p>
//   )
// }
// function App() {
//   return (
//     <div className="App">
//       <CreateAnimal animalList={myAnimals}/>
//     </div>
//   );
// }
