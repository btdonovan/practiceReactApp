import React from 'react';
import './App.css';
import GuestList from './guestList';
import Rsvped from './rsvped';
import Waiting from './waiting';
import AddGuest from './addGuest';

let guestList = [
  {firstName: "Rachel", lastName: "Green", rsvp: true},
  {firstName: "Ross", lastName: "Geller", rsvp: false},
  {firstName: "Monica", lastName: "Geller", rsvp: true},
  {firstName: "Chandler", lastName: "Bing", rsvp: false},
  {firstName: "Joey", lastName: "Tribbiani", rsvp: false},
  {firstName: "Leslie", lastName: "Knope", rsvp: true},
  {firstName: "April", lastName: "Ludgate", rsvp: true},
  {firstName: "Ann", lastName: "Perkins", rsvp: false},
  {firstName: "Ron", lastName: "Swanson", rsvp: false},
  {firstName: "Tom", lastName: "Haverford", rsvp: true},
  {firstName: "Ben", lastName: "Wyatt", rsvp: false},
  {firstName: "Donna", lastName: "Meagle", rsvp: true},
  {firstName: "Andy", lastName: "Dwyer", rsvp: false},
  {firstName: "Jerry", lastName: "Gergitch", rsvp: true},
] 

function App() {
  return (
    <div className="App">
      <GuestList people={guestList} />
      <Rsvped people={guestList} />
      <Waiting people={guestList} />
      <AddGuest people={guestList} />
    </div>
  );
}

export default App;
