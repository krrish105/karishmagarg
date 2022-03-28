// Importing JSON File object containing project details
const data = require("../data.json").obj;

// Project Component
export default function Project({home}){
    return (
        <div className="projects grid-container">

            <div className="project-grid col-12">
                {
                    Array.from(data, (el,i) => <ProjectCard key={i} obj={el} location = {home}/>)
                }
            </div>
        </div>
    );
}

// Project Card Component
function ProjectCard({obj, location}){
    return (
        <div className="project-card">
            <img src={obj.img} alt={obj.name} /> 
            <div className="project-text">
                <h3>
                    {obj.name}
                </h3>
                {
                    !location ?  <p>{obj.desc}</p> : ""
                }
                <div className="project-links">
                    <div className="project-link">
                        <a href={obj.link} target="_blank" className="contact-me">View Site</a>
                    </div>
                    <div className="project-link">
                        <a href={obj.code} target="_blank" className="contact-me view-code">View Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
}