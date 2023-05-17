import React, {Component} from "react";
import Phonebook from "./Phohebook/Phonebook";
import Contacts from "./Contacts/Contacts"

class App extends Component {

  state = {
    contacts: [],
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

  render () {
    return (
      <>
    <Phonebook handleChange={this.handleChange} handleSubmit={this.handleSubmit}/>
    <Contacts/>
    </>
    )
  }
}

export default App;
