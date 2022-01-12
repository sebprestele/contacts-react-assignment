import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Details from "./Details"
import reportWebVitals from './reportWebVitals';

/* const [contacts, setContacts] = React.useState([]);

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

return <div className="contacts">{contactDetails}</div>; */

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
