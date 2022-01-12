import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Details from "./Details" 
import Home from "./Home"

function App() {

  const [contacts, setContacts] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setContacts(data);
      });
  }, []);

 return (
  <BrowserRouter>
  <Routes>
     <Route path="/" element={<Home contacts={contacts}  />}   />
     <Route path="/Details/:id" element={<Details contacts={contacts} />} />
   
 </Routes>
</BrowserRouter>

 )

}

export default App;
