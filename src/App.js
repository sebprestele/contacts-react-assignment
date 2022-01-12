import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Card from "./Card";
import Details from "./Details" 

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

 // return <div className="contacts">{contactDetails}</div>;

 return (
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<App />} />
     <Route path="/Details" element={<Details />} />
   
 </Routes>
</BrowserRouter>

 )

}

export default App;
