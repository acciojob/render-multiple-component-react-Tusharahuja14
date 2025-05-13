import React from "react";
import "../styles/App.css";

const App = () => {
  const projects = [
    {
      name: "AI Personal Assistant",
      description: "A virtual assistant that helps schedule meetings and manage tasks using AI.",
    },
    {
      name: "Smart Home Automation",
      description: "An IoT system to automate home appliances using a smartphone.",
    },
    {
      name: "Fitness Tracker App",
      description: "An app to monitor health, steps, and workouts with real-time analytics.",
    },
  ];

  return (
    <div className="ns-wrapper" id="main">
      {projects.map((project, index) => (
        <div key={index}>
          <h1 data-ns-test="project-name">{project.name}</h1>
          <h6 data-ns-test="project-description">{project.description}</h6>
        </div>
      ))}
    </div>
  );
};

export default App;
