import React from "react"
import { Link, useParams } from "react-router-dom"
import Button from "./Button"
import Card from "./Card"


export default function Details({contacts}) {

const { id } = useParams()

const person = contacts.filter((contact) => contact.id == id)
console.log(person)

    return (
        <div className="contact--card details">
            {person.map((contact) => (
                <div>
                <p>Name: {contact.name}</p>
                <p>Username: {contact.username}</p>
                <p>E-Mail: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <p>Company: {contact.company.name}</p>
                <p>Website: {contact.website}</p>
                <p>Address:</p>
                <p>City: {contact.address.city}</p>
                <p>Street: {contact.address.street}</p>
                <p>Suite: {contact.address.suite}</p>
                <p>Zipcode: {contact.address.zipcode}</p>           
                </div>
 
            )
            )}
              <Link to ="/"  className="back-btn">Back to All Contacts</Link>
        </div>
    )

  /*   return (
        <div className="contact--card">
         {person.map((contact) => (
        <Card
          key={contact.id}
          name={contact.name}
          userName={contact.username}
          website={contact.website}
          initial={contact.name.charAt(0)}
          userId={contact.id}
        />
      ))}    
        </div>
  
    ) */
}