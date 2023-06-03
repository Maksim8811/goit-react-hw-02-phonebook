import React, {Component} from "react";
import "./Phonebook.css";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

class Phonebook extends Component {
    loginInputId = nanoid()
    telInputId = nanoid()
    
    state = {
        name: '',
        id: '',
        number: ''
      }


      handleChange = evt => {
        const {name, value} = evt.target
        this.setState({[name]: value})
        
        
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.onSubmit(this.state)
        this.reset()
      }

    reset = () => {
        this.setState({name: '', number: ''})
    }  
     

    render () {
        
        return (
        <>
        <div className="container_form">
        <form htmlFor={this.loginInputId} className="form" onSubmit={this.handleSubmit}>
        <label className="label_form" id={this.loginInputId}>Name
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

<label className="label_form" id={this.telInputId}>Number
<input
 onChange={this.handleChange}
 value={this.state.number} 
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
</label>

<button className="button" type="submit" >Add contact</button>
</label>
       </form>
       </div>
       
</>
    
)
}
}

Phonebook.propTypes = {
    onSubmit: PropTypes.func
}

export default Phonebook;