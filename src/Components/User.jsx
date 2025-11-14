import React from "react";

export default function User(props) {
  return (
    <div className="Card-container">
      <span className={props.online ? "pro online" : "pro offline"}>
        {props.online ? "ONLINE" : "OFFLINE"}
      </span>

      <img src={props.profile} className="img" alt={props.name} />

      <h3>{props.name}</h3>
      <h6>{props.city}</h6>
      <p>{props.description}</p>

      <div className="buttons">
        <button className="primary">Message</button>
        <button className="primary outline">Following</button>
      </div>

      <div className="skills">
        <h6 style={{ color: "white" }}>Skills</h6>
        <ul>
          {(props.skills || []).map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

