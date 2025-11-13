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


// import React from "react";

// const userData = [
//   {
//   name:"Rainer",
//         city:"New York",
//         description:"Front-End Developer",
//         skills:[
//           "UI/UX",
//           "FRONT-END DEVELOPER",
//           "HTML 5",
//           "CSS 3",
//           "JAVASCRIPT",
//           "REACT.JS",
//           "NODE.JS",
//         ],
//         online:true,
        
//         profile:"./src/assets/human 1.1.jpg"
//       },
//       {
//     name:"MAX",
//     city:"LANDON",
//         description:"Back-End Developer",
//         skills:[
//           "JAVA",
//           "BACK-END DEVELOPER",
//           "STREAM API",
//           "JDBC",
//           "SPRINGBOOT",
//           "AZURE",
          
//         ],
//         online:false,
        
//         profile:"./src/assets/human 2.jpg",
//       },
//       {
//         name:"JHON",
//         city:"USA",
//         description:"FULLTACK Developer",
//         skills:[
//           "UI/UX",
//           "FRONT-END DEVELOPER",
//           "HTML 5",
//           "CSS 3",
//           "JAVASCRIPT",
//           "REACT.JS",
//           "NODE.JS",
//           "JAVA",
//           "BACK-END DEVELOPER",
//           "STREAM API",
//           "JDBC",
//           "SPRINGBOOT",
//           "AZURE",
//         ],
//         online:true,
        
//         profile:"./src/assets/human 3.jpg"
//       },
// ];

// export default function User(props) {
//   return (
//     <div className="Card-container">
//       <span className={props.online ? "pro online" : "pro offline"}>
//         {props.online ? "ONLINE" : "OFFLINE"}
//       </span>

//       <img src={props.profile} className="img" alt={props.name} />

//       <h3>{props.name}</h3>
//       <h6>{props.city}</h6>
//       <p>{props.description}</p>

//       <div className="buttons">
//         <button className="primary">Message</button>
//         <button className="primary outline">Following</button>
//       </div>

//       <div className="skills">
//         <h6 style={{color:"white"}}>Skills</h6>
//         <ul>
//           {props.skills.map((skill, index) => (
//             <li key={index}>{skill}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }





