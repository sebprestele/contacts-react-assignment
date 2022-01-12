import React from "react";
import "./App.css";
import Card from "./Card";

function App() {
  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
      });
  }, []);

  const contactDetails = contacts.map((contact) => {
    return (
      <Card
        key={contact.id}
        name={contact.name}
        userName={contact.username}
        website={contact.website}
        initial={contact.name.charAt(0)}
      />
    );
  });

  return <div className="contacts">{contactDetails}</div>;
}

export default App;
