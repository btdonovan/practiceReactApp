import React from 'react';
import './App.css';

function Waiting(props) {
  return (
    <div>
      <h1>Have not RSVPed</h1>
      <p>
        {props.people.filter(guest => !guest.rsvp).length}
      </p>
    </div>
  );
}

export default Waiting;