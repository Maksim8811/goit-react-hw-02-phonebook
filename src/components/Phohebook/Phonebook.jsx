import React from "react";
import "./Phonebook.css"

function Phonebook () {
    return (
        <>
        <h1 className="title">Phonebook</h1>
        <div className="container_form">
       <form className="form">
        <label className="label_form">Name
       <input
  className="input"     
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/>
<button className="button" type="button">Add contact</button>
</label>
       </form>
       </div>
       
</>
    )
}

export default Phonebook;