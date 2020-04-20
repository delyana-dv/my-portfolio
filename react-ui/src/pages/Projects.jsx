import React from "react";
import "../styles/Pages.css";
import Position from "../components/Position.jsx";
import Skill from "../components/Skill.jsx";

const Projects = () => {
  const positions = [
    {
      id: 3,
      role: "Node JS Developer",
      client: { name: "d.ventures", logo: "", website: "http://d.ventures" },
      from: "october 2019",
      to: "",
      technologies: ["NodeJS", "MySQL", "React", "Heroku & AWS"]
    },
    {
      id: 2,
      role: "Software Developer",
      client: { name: "verivox", logo: "", website: "http://verivox.de" },
      from: "march 2018",
      to: "july 2019",
      technologies: [".Net & C#", "Oracle", "GoCD"]
    },
    {
      id: 1,
      role: ".NET Developer",
      client: { name: "verlingue", logo: "", website: "http://verlingue.fr" },
      from: "march 2015",
      to: "february 2018",
      technologies: [".Net & C#", "MS SQL", "WPF", "WCF", "Firefly"]
    }
  ];
  const skills = [
    { tech: ["a", "a"] },
    { languages: ["b", "b"] },
    { soft: ["c", "c"] }
  ];
  return (
    <>
      <div className="Skills">
        <p>my skills:</p>
        <div className="skillsContainer">
          {/* {skills.map(value => (
            <Skill item={value} />
          ))} */}
        </div>
      </div>
      <div className="Projects">
        <p>my latest projects:</p>
        <div className="projectsContainer">
          {positions.map(value => (
            <Position item={value} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
