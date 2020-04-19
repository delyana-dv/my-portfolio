import React from "react";
import "../styles/Pages.css";
import Position from "./../components/Position.js";

const Projects = () => {
  const positions = [
    {
      id: 3,
      role: "Node Js Developer",
      client: { name: "d.ventures", logo: "", website: "http://d.ventures" },
      from: "october 2019",
      to: "",
      technologies: ["nodejs", "mysql", "react", "heroku", "aws"]
    },
    {
      id: 2,
      role: "Software Developer",
      client: { name: "verivox", logo: "", website: "http://verivox.de" },
      from: "march 2018",
      to: "july 2019",
      technologies: ["dotnet", "oracle"]
    },
    {
      id: 1,
      role: ".NET Developer",
      client: { name: "verlingue", logo: "", website: "http://verlingue.fr" },
      from: "march 2015",
      to: "february 2018",
      technologies: ["dotnet", "gocd"]
    }
  ];
  return (
    <div className="Projects">
      <p>my latest projects:</p>
      <div className="projectsContainer">
        {positions.map(value => (
          <Position item={value} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
