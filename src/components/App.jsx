import React, {Component} from "react";
import Phonebook from "./Phohebook/Phonebook";
// import Contacts from "./Contacts/Contacts";


class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  formSubmitHandler = data => {
    console.log('data', data)
  }

  render () {
  
    return (
      <>
      <h1 className="title">Phonebook</h1>
    <Phonebook onSubmit={this.formSubmitHandler}/>
    {/* <h2>Contacts</h2>
    <Contacts/> */}
    </>
    )
  }
}

export default App;
