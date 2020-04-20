import React from "react";
import "../styles/Pages.css";

const About = () => {
  return (
    <div className="About">
      <p>about me</p>
      <img
        src="../../public/resources/me/didi-me.jpeg"
        alt="this is me :)"
      ></img>

      <div className="me-description">
        <p>
          As a Software Engineer during the last 12+ years, I’ve got the chance
          to participate in many projects, work along with lots of
          professionals, share and learn. I've worked for 4 companies, where we
          have used mostly Microsoft technologies in our projects and the
          English language for communication with the customers and among the
          teams. Currently i am discovering the world of NODE JS and it's the
          time when one considers that technologies are popping up each day….
          some of the most important qualities to be good at software
          development is the the agility and passion to gain knowledge in
          different areas in terms of technology stack, product development
          processes, etc..
        </p>
        <p>
          Apart from Software Development, I am interested also in Digital
          Marketing, languages, sports and tourism :)
        </p>
      </div>
    </div>
  );
};

export default About;
