import React from 'react';
import './App.css';
import Guest from './guest';

function Rsvped(props) {
  return (
    <div>
      <h1>RSVPed</h1>
      <p>
        {props.people.filter(guest => guest.rsvp).length}
      </p>
    </div>
  );
}

export default Rsvped;