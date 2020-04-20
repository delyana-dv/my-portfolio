import React from "react";
import "./Position.css";
import { ConsoleWriter } from "istanbul-lib-report";

const Skill = props => {
  const technologyLogoPath = `../../public/resources/logos/technologies/`;
  //console.log(props.item);

  const tech = props.item["tech"];
  const languages = props.item["languages"];
  const soft = props.item["soft"];

  console.log(tech);
  return (
    <>
      <div className="Skill">
        (tech !== undefined ? (
        <div className="tech">
          <div className="">
            <ul>
              {tech.map(value => {
                console.log("value: ", value);
                const logo = technologyLogoPath + value + ".svg";
                return (
                  <li>
                    <img className="technology-logo" src={logo} />
                  </li>
                );
              })}
            </ul>
          </div>
          ) : (<></>)
        </div>
      </div>
    </>
  );
};

export default Skill;
