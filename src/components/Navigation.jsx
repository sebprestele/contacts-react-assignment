import React from "react"

export default function Navigation (props) {

    return (
        
        <div className="header">
        <div className="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/9/93/Google_Contacts_icon.svg" alt="" /></div>
         <ul className="nav">
             <li><button className="nav--sort" onClick={props.handleClick }>{props.sorted ? "Sort A-Z" : "Sort Z-A"}</button></li>
            <li><input className ="nav--search" onChange={props.handleChange} placeholder="Search for name"></input></li>
        </ul>
        </div>
       
    )
}
