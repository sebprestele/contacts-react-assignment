import React from "react";
import Card from "./Card";

export default function Home({ sortContacts, contacts }) {

  return (
    <main>
      
      {//will be used to setup a sorting button later
      /* <div className="sort">
      <button className="sort" onClick={sortContacts}>Sort</button>
      </div> */}
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
  );
}
