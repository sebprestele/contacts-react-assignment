import React from "react";
import Card from "./Card";
import Navigation from "./Navigation";

export default function Home({ data, contacts, filterContacts, toggleSorted, sorted  }) {
  

  return (
    <>
    
    <Navigation 
    handleClick={toggleSorted}
    sorted={sorted}
    handleChange={filterContacts}
    />
    <main>
      
      <div className="contacts">
        { data.map((contact) => (
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
