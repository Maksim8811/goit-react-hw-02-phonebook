import React from "react";

function Contacts ({contacts}) {
    
    
    return (
    <>
    <ul>
        {contacts.map(({name, id, number}) => {
            return (
                <li key={id}>{name}: {number}</li>
            )
        })}
    </ul>
    </>
        )
}

export default Contacts