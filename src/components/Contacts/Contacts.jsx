import React from "react";

function Contacts ({addContacts, contacts}) {
    console.log(contacts)
    return (<>
    <h2>Contacts</h2>
    <ul>
        {contacts.map(contact => {
            return (
                <li>{contact.name}</li>
            )
        })}
    </ul>
    
    
    
    
    
    </>
        
        
    )
}

export default Contacts