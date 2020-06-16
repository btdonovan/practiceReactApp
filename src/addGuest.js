import React from 'react';
import './App.css';

class AddGuest extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          formValues: {}
      }
  }

  handleChange(event) {
      event.preventDefault();
      let formValues = this.state.formValues;
      let name = event.target.name;
      let value = event.target.value;

      formValues[name] = value;

      this.setState({formValues})
  }

  handleSubmit(event) {
      event.preventDefault();
      console.log(this.state.formValues);
      if (this.state.formValues.rsvped === 'on') {
        var rsvped = true
      } else {
        var rsvped = false
      }
      this.props.people.push({firstName: this.state.formValues.firstName, lastName: this.state.formValues.lastName, rsvp: rsvped})
  }

      render(){
      return (
      <form onSubmit={this.handleSubmit.bind(this)}>
              <label> First Name:
                  <input type="text" name="firstName" placeholder="First Name" value={this.state.formValues["firstName"]} onChange={this.handleChange.bind(this)} />
              </label><br />
              <label> Last Name:
                  <input type="text" name="lastName" placeholder="Last Name" value={this.state.formValues["lastName"]} onChange={this.handleChange.bind(this)} />
              </label><br />
              <label> RSVPed:
                  <input type="checkbox" name="rsvped" onChange={this.handleChange.bind(this)}/>
              </label><br />
                  <input className="btn btn-primary" type="submit" value="Submit" />
         </form>
    )
  }
}


export default AddGuest;