import React from "react";
import "./Skills.css";
import webtech from "../../assets/html.png";
import bootstrap from "../../assets/bootstrap.png";
import mongo from "../../assets/mongo.png";
import react from "../../assets/react.png";
import express from "../../assets/express.png";
import node from "../../assets/node.png";
import fsd from "../../assets/fsd.png";

function Skills() {
  return (
    <section id="skill">
      <span className="skillTitle">
        Full-Stack Proficiency: MERN Stack and Front-End Mastery
      </span>
      <span className="skillDescription">
        Navigating the intricate landscape of web development, I've honed my
        skills in a variety of technologies, enabling me to create end-to-end
        solutions that seamlessly bridge the gap between frontend and backend
        functionalities.
      </span>
      <div className="skillsContainer">
        <div className="skillBar">
          <img src={webtech} alt="html-css-javaScript" className="skillImg" />
          <div className="skillBarText">
            <h2>HTML, CSS, and JavaScript</h2>
            <p>At the core of my expertise lies HTML, CSS, and JavaScript – the triumvirate of web development. </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={bootstrap} alt="bootstrap" className="skillImg" />
          <div className="skillBarText">
            <h2>Bootstrap</h2>
            <p>I've harnessed the power of Bootstrap to expedite frontend development.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={mongo} alt="mongoDB" className="skillImg" />
          <div className="skillBarText">
            <h2>MongoDB</h2>
            <p>My adeptness with MongoDB enables me to navigate the world of dynamic, non-relational databases.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={express} alt="express.js" className="skillImg" />
          <div className="skillBarText">
            <h2>Express.js</h2>
            <p>With Express.js, I craft sturdy server-side applications, capitalizing on its minimalist framework to design RESTful APIs and orchestrate middleware. </p>
          </div>
        </div>
        <div className="skillBar">
          <img src={react} alt="react.js" className="skillImg" />
          <div className="skillBarText">
            <h2>React.js</h2>
            <p>React serves as my canvas for imbuing user interfaces with life and interactivity.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={node} alt="node.js" className="skillImg" />
          <div className="skillBarText">
            <h2>Node.js</h2>
            <p>Node.js forms the bedrock of my server-side development, empowering me to construct high-performance and scalable applications.</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={fsd} alt="Full-Stack-Development" className="skillImg" />
          <div className="skillBarText">
            <h2>Full-Stack Integration</h2>
            <p>Combining these tools and technologies seamlessly, I harmonize frontend and backend functionalities to realize end-to-end solutions.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
