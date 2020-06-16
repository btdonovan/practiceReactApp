import React from 'react';
import './App.css';

function Guest(props) {
  return (
    <p>
      {props.firstName} {props.lastName}
    </p>
  );
}

export default Guest;