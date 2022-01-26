import React from "react";
import Card from "./Card";
import Navigation from "./Navigation";

export default function Home({ sortContacts, contacts }) {

  return (
    <>
    
    <Navigation/>
    <main>
      
      <div className="contacts">
        {contacts.map((contact) => (
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
    </main>
    </>
  );
}
