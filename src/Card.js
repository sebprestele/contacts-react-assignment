import React from "react"
import Button from "./Button"

export default function Card(props) {

    return (
        <div className="contact--card">
            <div className="card-icon-holder"><span className="card--icon">{props.initial}</span></div>
            <div className="contact-info">
               <h3>{props.name}</h3>
               <p className="username">@{props.userName}</p>
               <a href="#">{props.website}</a>
            </div>
            <Button cardId={props.userId}/>
        </div>
        
    )
  
}
