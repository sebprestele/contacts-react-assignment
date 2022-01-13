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
                <div className="person--details">
                <p><span>Name:</span> {contact.name}</p>
                <p><span>Username:</span> {contact.username}</p>
                <p><span>E-Mail:</span> {contact.email}</p>
                <p><span>Phone:</span> {contact.phone}</p>
                <p><span>Company:</span> {contact.company.name}</p>
                <p><span>Website:</span> {contact.website}</p>
                <hr></hr>
                <p><span>Address:</span></p>
                <p><span>City:</span> {contact.address.city}</p>
                <p><span>Street:</span> {contact.address.street}</p>
                <p><span>Suite:</span> {contact.address.suite}</p>
                <p><span>Zipcode:</span> {contact.address.zipcode}</p>           
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