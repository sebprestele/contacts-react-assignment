import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./Details";
import Home from "./Home";

function App() {
  const [contacts, setContacts] = React.useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        data.sort((a, b) => a.name.localeCompare(b.name))
        setContacts(data);
      });
  }, []);



  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home contacts={contacts}   />} />
        <Route path="/Details/:id" element={<Details contacts={contacts} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
