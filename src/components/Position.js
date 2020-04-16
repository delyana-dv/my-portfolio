import React from "react";
import "./Position.css";
const Position = props => {
  const { id, role, client, from, to, technologies } = props.item;
  const clientLogo = `../../resources/logos/companies/${client.name}.png`;
  const technologyLogoPath = `../../resources/logos/technologies/`;

  return (
    <>
      <div className="Position" id={id}>
        <div className="basic-data">
          <p className="role">{role}</p>
          <p>
            {from} - {to ? to : "present"}
          </p>
          <div className="client">
            <a href={client.website} target="_blank" rel="noopener noreferrer">
              <img src={clientLogo} alt={client.name} />
            </a>
          </div>
        </div>

        <div className="technologies">
          <ul>
            {technologies.map(value => {
              const logo = technologyLogoPath + value + ".png";
              return (
                <li>
                  <img className="technology-logo" src={logo} />
                </li>
              );
            })}

            {/* {technologies ? technologies.map(value => <li>f</li>) : <li>-</li>} */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Position;
