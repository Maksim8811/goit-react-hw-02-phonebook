import React, {Component} from "react";
import "./Phonebook.css"
// import { nanoid } from 'nanoid';

class Phonebook extends Component {
    
    state = {
        name: '',
      }


      handleChange = evt => {
        this.setState({name: evt.target.value})
        
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.onSubmit(this.state)
      }
     

    render () {
        return (
        <>
        
        <div className="container_form">
       <form className="form" onSubmit={this.handleSubmit}>
        <label className="label_form">Name
       <input
  onChange={this.handleChange} 
  value={this.state.name} 
  className="input"     
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<button className="button" type="submit" >Add contact</button>
</label>
       </form>
       </div>
       
</>
    
)
}
}

export default Phonebook;