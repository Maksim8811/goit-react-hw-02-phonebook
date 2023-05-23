import React, {Component} from "react";
import Phonebook from "./Phohebook/Phonebook";
import Contacts from "./Contacts/Contacts"

class App extends Component {

  state = {
    contacts: [{name: "Adel Duko", id: 1},{name: "Dido ryk", id: 2}],
    name: ''
  }

  

  handleChange = evt => {
    const {value} = evt.target
    this.setState({name: value})
    
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const {name} = this.state
    console.log(name)
  }

  addContacts = () => {
    console.log('first')
  }

  

  render () {
    return (
      <>
    <Phonebook handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    <Contacts addContacts={this.addContacts} contacts={this.state.contacts}/>
    </>
    )
  }
}

export default App;
