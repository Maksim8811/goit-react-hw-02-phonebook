import React, {Component} from "react";
import Phonebook from "./Phohebook/Phonebook";
import Contacts from "./Contacts/Contacts";
import { nanoid } from 'nanoid';


class App extends Component {

  state = {
    contacts: [],
    name: '',
    number: ''
  }

  formSubmitHandler = ({name,id, number}) => {
    
    
    const contact = {
      name,
      id: `${nanoid()}`,
      number,
}
this.setState(prevState => ({
  contacts: [contact, ...prevState.contacts]
}))
    console.log('contact', contact)
  }

  render () {
  
    return (
      <>
      <h1 className="title">Phonebook</h1>
    <Phonebook onSubmit={this.formSubmitHandler}/>
    <h2>Contacts</h2>
    <Contacts contacts={this.state.contacts}/>
    </>
    )
  }
}

export default App;
