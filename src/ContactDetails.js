import React from "react";

function ContactDetails({contacts}) {
    return(
        /* const contactDetails = contacts.map((contact) => {
            return ( */

            {contacts.map(contact => (
            <Card
                key={contact.id}
                name={contact.name}
                userName={contact.username}
                website={contact.website}
                initial={contact.name.charAt(0)}
              />)  )}    
              
            );   
    
}