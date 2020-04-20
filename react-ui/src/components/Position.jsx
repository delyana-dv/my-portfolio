import React from "react";
import "./Position.css";
const Position = props => {
  const { id, role, client, from, to, technologies } = props.item;
  const clientLogo = `../../public/resources/logos/companies/${client.name}.png`;
  const technologyLogoPath = `../../public/resources/logos/technologies/`;

  return (
    <>
      <div className="Position">
        <div className="basic-data">
          <p className="role">{role}</p>
          <p>
            {from} - {to ? to : "present"}
          </p>
        </div>
        <div className="detail-data" id={id}>
          <div className="client">
            <a href={client.website} target="_blank" rel="noopener noreferrer">
              <img src={clientLogo} alt={client.name} />
            </a>
          </div>

          <div className="technologies">
            <ul>
              {technologies.map(value => {
                const logo = technologyLogoPath + value + ".svg";
                return (
                  <li>
                    {value}
                    {/* <img className="technology-logo" src={logo} /> */}
                  </li>
                );
              })}

              {/* {technologies ? technologies.map(value => <li>f</li>) : <li>-</li>} */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Position;
