import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./components/Details";
import Home from "./components/Home";

function App() {
  const [contacts, setContacts] = React.useState([]);
  const [sorted, setSorted] = React.useState(true);
  const [searchInput, setSearchInput] = React.useState("")
  const [filter, setFilter] = React.useState([])

  // Getting data from Placeholder API

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        //Sort from A-Z on first page load
     data.sort((a, b) => a.name.localeCompare(b.name))
        setContacts(data);
      });
  }, []);

  //Sort the names A-Z and Z-A on click of sort button

  function toggleSorted() {
    setSorted(prevSorted => !prevSorted)
    console.log(sorted)
    if (sorted !== false) {
      contacts.sort((a,b) => b.name.localeCompare(a.name))
      setContacts(contacts) } else {
        contacts.sort((a, b) => a.name.localeCompare(b.name))
        setContacts(contacts);
      }
  }

  //Filter the contacts by name

  function filterContacts(e) {
    setSearchInput(e.target.value)
    const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(searchInput))
    setFilter(filteredContacts)
    console.log(filter)
  }


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home data={searchInput.length ? filter: contacts} filterContacts={filterContacts} toggleSorted={toggleSorted} sorted={sorted} />} />
        <Route path="/Details/:id" element={<Details contacts={contacts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
