import React from "react";
import "./About.css";
import workImg from "../../assets/work.png";
import eduImg from "../../assets/education.png";
// EDUCATION DATA
let educationDetail = {
  year1: "2006-2012",
  year2: "2017-2019",
  year3: "2023",
  cource1: "Bachelor of Arts",
  cource2: "Masters of Business Administration",
  cource3:"MERN Stack Developer Cource",
  college1: "S.G.R.R (PG) College",
  college2: "Subharti University, Meerut",
  college3: "Unikaksha",
  info1: "I have done BA in Economics, Mathematics, English.",
  info2: "I have done MBA in Marketing and Finance.",
  info3:"I have done full stack web development cource in MERN stack.",
};

function eduDetail() {
  let content = `<div className="year"><h4>${educationDetail.year1}</h4></div>
        <div className="informaion">
            <h2>${educationDetail.cource1}</h2>
            <h3>${educationDetail.college1}</h3>
            <p>${educationDetail.info1}</p>
        </div>
        <div className="year"><h4>${educationDetail.year2}</h4></div>
        <div className="informaion">
            <h2>${educationDetail.cource2}</h2>
            <h3>${educationDetail.college2}</h3>
            <p>${educationDetail.info2}</p>
        </div>
        <div className="year"><h4>${educationDetail.year3}</h4></div>
        <div className="informaion">
            <h2>${educationDetail.cource3}</h2>
            <h3>${educationDetail.college3}</h3>
            <p>${educationDetail.info3}</p>
        </div>`;
  document.querySelector(".container").innerHTML = content;
}
//  JOB DATA
let experienceDetail = {
  year1: "Jun 2020 - Feb 2021",
  year2: "Dec 2021 - August 2023",
  jobProfile1: "Admin Exexutive",
  jobProfile2: "Director",
  companyName1: "A R Online Servies",
  companyName2: "Fitfarm Healthplus LLP",
  jobDetail1:
    "In the year 2020, while serving as an Admin Executive at A R Online Services, I had my first intriguing encounter with the digital realm. Curiosity led me to explore HTML, an initial spark that ignited my fascination for web technologies.",
  jobDetail2:
    "With the knowledge and insights garnered from my digital endeavors, I took a bold step in December 2021 by launching my very own startup, Fitfarm. Rooted in the tech landscape, Fitfarm aimed to simplify the fitness journey by connecting users with nearby fitness studios on a workout day basis. Despite the startup's promising concept, challenges arose that ultimately led to its closure. However, through the highs and lows of this entrepreneurial venture, I was introduced to the transformative power of MERN Stack technology.",
};
function expDetail() {
  let content = `<div className="year"><h4>${experienceDetail.year1}</h4></div>
        <div className="informaion">
            <h2>${experienceDetail.jobProfile1}</h2>
            <h3>${experienceDetail.companyName1}</h3>
            <p>${experienceDetail.jobDetail1}</p>
        </div>
        <div className="year"><h4>${experienceDetail.year2}</h4></div>
        <div className="informaion">
            <h2>${experienceDetail.jobProfile2}</h2>
            <h3>${experienceDetail.companyName2}</h3>
            <p>${experienceDetail.jobDetail2}</p>
        </div>`;
  document.querySelector(".container").innerHTML = content;
}

function About() {
  return (
    <section id="about">
      <div className="greet">
        <q>
          Greetings! I'm a passionate individual on a dynamic
          journey within the world of technology. As I take strides forward, let
          me share with you the path that has brought me to where I am today.
        </q>
      </div>
      <button id="education" onClick={eduDetail}>
        <img src={eduImg} alt="education" /><span>Education</span> 
      </button>
      <button id="experience" onClick={expDetail}>
        <img src={workImg} alt="work" /> <span>Experience</span> 
      </button>
      <div className="container">
        <div className="year">
          <h4>2009-2012</h4>
        </div>
        <div className="information">
          <h2>Bachelor of Arts</h2>
          <h3>S.G.R.R (PG) University, Dehradun</h3>
          <p>I have done BA in Economics, Mathematics, English.</p>
        </div>
        <div className="year">
          <h4>2017-2019</h4>
        </div>
        <div className="information">
          <h2>Masters of Business Administration</h2>
          <h3>Subharti University, Meerut</h3>
          <p>I have done MBA in Marketing and Finance.</p>
        </div>
        <div className="year">
          <h4>2023</h4>
        </div>
        <div className="information">
          <h2>MERN Stack Developer Cource</h2>
          <h3>Unikaksha</h3>
          <p>I have done full stack web development cource in MERN stack.</p>
        </div>
      </div>
    </section>
  );
}

export default About;
