// import PropTypes from "prop-types";

import React from "react";
import User from "./Components/User";
import "./App.css";

const userData = [
  {
    name: "Rainer",
    city: "New York",
    description: "Front-End Developer",
    skills: [
      "UI/UX",
      "FRONT-END DEVELOPER",
      "HTML 5",
      "CSS 3",
      "JAVASCRIPT",
      "REACT.JS",
      "NODE.JS",
    ],
    online: true,
    profile:"./src/assets/human 1.1.jpg",
  },
  {
    name: "Max",
    city: "London",
    description: "Back-End Developer",
    skills: [
      "JAVA",
      "BACK-END DEVELOPER",
      "STREAM API",
      "JDBC",
      "SPRINGBOOT",
      "AZURE",
    ],
    online: false,
   profile:"./src/assets/human 2.jpg"
  },
  {
    name: "John",
    city: "USA",
    description: "Full Stack Developer",
    skills: [
      "HTML 5",
      "CSS 3",
      "JAVASCRIPT",
      "REACT.JS",
      "JAVA",
      "SPRINGBOOT",
      "AZURE",
    ],
    online: true,
    profile:"./src/assets/human 3.jpg",
  },
];

function App() {
  return (
    <>
      {/* <h1>Profile Card Project in React</h1> */}

      {userData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          description={user.description}
          skills={user.skills}
          online={user.online}
          profile={user.profile}
        />
      ))}
    </>
  );
}

export default App;






