import React from 'react';
import './App.css';
import Guest from './guest';

function GuestList(props) {
  return (
    <div>
      <h1>Guest List</h1>
      <div>
        {props.people.filter(guest => guest.rsvp)
        .sort((a, b) => a.lastName.localeCompare(b.lastName))
        .map(guest => <Guest firstName={guest.firstName} lastName={guest.lastName} rsvp={guest.rsvp} />)}
      </div>
    </div>
  );
}

export default GuestList;