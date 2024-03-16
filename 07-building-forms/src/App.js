import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { FOCUSABLE_SELECTOR } from '@testing-library/user-event/dist/utils';




function Form() {
    const [myForm, setMyForm] = useState({
      fName: "",
      lName: ""
    })
    
    const handleSubmit = function(clickEvent) {
      clickEvent.preventDefault();
      const info = myForm.fName + " " + myForm.lName
      alert(info)
    }

  return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="fName">First Name</label>
        <input 
          value={myForm.fName}
          type="text"
          onChange={function Event(event) {
              setMyForm({...myForm, fName: event.target.value})}
            }>       
        </input>

        <label htmlFor="lName">Last Name</label>
        <input
          value={myForm.lName} 
          type="text"
          onChange={function Event(event) {
            setMyForm({...myForm, lName: event.target.value})}
            }>        
        </input>

        <input type="submit" value="Submit" /> 
      </form>
  );
}

export default Form;
