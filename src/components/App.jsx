import React, {Component} from "react";
import Phonebook from "./Phohebook/Phonebook";

class App extends Component {

  state = {
    contacts: [],
    name: ''
  }

  render () {
    return (
    <Phonebook/>
    )
  }
}

export default App;
