import React from 'react';
import "./Projects.css";
import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project3.jpg";

function Projects() {
  return (
    <section id="project">
        <div className='projectContainer'>
            <h2 className="projectHeading">
                My Projects
            </h2>
            <p className="projectParagraph">
               Here are some of the projects that showcase my MERN stack expertise:
            </p>
            <div className="projectCards">
                <div className="card">
                    <img src={project1} alt="projectImg" className='projectImg' />
                    <div className="link">
                    <a href="https://pro-news-site.netlify.app/" target='_blank' rel='noreferrer'>Live Preview</a>
                    <a href="https://github.com/Spharasi1/static-news-project.git" target='_blank' rel='noreferrer'>Source Code</a>
                    </div>
                    <h3 className="projectTitle">Project Name:<span className='ProjectName'>News Website</span></h3>
                    <p className="projectDescription"><span className="description">Description</span>For my News Website project, I designed and developed a user-friendly platform to keep users updated with the latest news and information. Using HTML and CSS, I created an intuitive and visually appealing interface that allows users to browse news articles by category.The responsive design ensures a seamless experience across different devices.</p>
                    
                </div>
                <div className="card">
                    <img src={project2} alt="projectImg" className='projectImg' />
                    <div className="link">
                    <a href="https://probatterystatus.netlify.app/" target="_blank" rel="noreferrer">Live Preview</a>
                    <a href="https://github.com/Spharasi1/Unikaksha_Projects/tree/main/html%2Bcss%2BjavaScript/battery-status" target='_blank' rel='noreferrer'>Source Code</a>
                    </div>
                    <h3 className="projectTitle">Project Name:<span className='ProjectName'>Battery Status</span></h3>
                    <p className="projectDescription"><span className="description">Description</span>The Battery Status project showcases my proficiency in HTML, CSS, and JavaScript. It's a simple yet useful tool that provides users with real-time information about their device's battery status. The application displays battery level, charging status, and time remaining, offering a quick glance at the device's power status.</p>
                    
                </div>
                <div className="card">
                    <img src={project3} alt="projectImg" className='projectImg' />
                    <div className="link">
                    <a href="https://protaskmanager.netlify.app/" target="_blank" rel="noreferrer">Live Preview</a>
                    <a href="https://github.com/Spharasi1/Unikaksha_Projects/tree/main/html%2Bcss%2BjavaScript/to-do-list" target='_blank' rel='noreferrer'>Source Code</a>
                    </div>
                    <h3 className="projectTitle">Project Name:<span className='ProjectName'>Task Manager</span></h3>
                    <p className="projectDescription"><span className="description">Description</span>The Task Manager is a practical web application developed using HTML, CSS, and JavaScript. It serves as a personal task organizer, allowing users to add, edit, and delete tasks. The project showcases my ability to create dynamic web applications with user interaction.</p>
                </div>
                
            </div>

        </div>
    </section>
  )
}

export default Projects