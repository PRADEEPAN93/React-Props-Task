import React from "react";
import User from "./Components/User";
import "./App.css";

import human1 from "./assets/human1.jpg";
import human2 from "./assets/human2.jpg";
import human3 from "./assets/human3.jpg";

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
    profile: human1,
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
    profile: human2,
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
    profile: human3,
  },
];

function App() {
  return (
    <>
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
