import React from "react"

export default function Navigation () {
    return (
        <div className="header">
        <div className="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg" alt="" /></div>
         <ul className="nav">
             <li><button className="nav--sort" /* onClick={sortContacts} */>Sort A-Z</button></li>
            <li><input className ="nav--search" placeholder="Search for name"></input></li>
        </ul>
        </div>
       
    )
}
