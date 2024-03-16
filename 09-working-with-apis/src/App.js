import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';


function UserCards(user){
  console.log(user)
  return (    <div className="card">
      <div className="card-content">
        <div className="front">
          <img src ={user.avatar}></img>
        </div>

        <div className="back">       
          <p>{user.first_name}</p>
          <p>{user.last_name}</p>
          <p>{user.date_of_birth}</p>
          <p>{user.gender}</p>
          <p>{user.phone_number}</p>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [profiles, setProfiles] = useState([]);
  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=10").then((response) => {
      return response.json();
    }).then(data => {
      setProfiles(data)
    }).catch((err)=> {
      console.log("rejected", err);
  })})

  return (
    <div className="App">
      <ul className="user-cards">
        {profiles.map((user) => <ul>{UserCards(user)}</ul>)}
      </ul>
      <button onClick={(e) => (
        fetch("https://random-data-api.com/api/users/random_user?size=10").then((response) => {
          return response.json();
        }).then(data => {
          setProfiles(data)
        }).catch((err)=> {
          console.log("rejected", err);
        }))}>Why did the robot go to the shoe shop? 
      </button>
    </div>
  )
}

export default App;
