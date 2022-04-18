// Import Statements
import Project from "./Project";
import SocialLinks from "./SocialLinks";

// Home Component
export default function Home(){

    return (
        <>  
            {/* header */}
            <header className="grid-container">

                <div className="header-text col-7">
                    <h2>Karishma Garg</h2>
                    <p>Hey there! I’m a Front-End Web Developer based in India, who focuses on writing accessible, clean and efficient code.</p>
                </div>

                <div id="avatar" className="col-6">
                    <img src= 'images/studying.svg' alt=""/>
                </div>

                <SocialLinks classes="social-links col-12"/>

            </header>
            <hr />

            {/* Main */}
            <div className="main">

                {/* About */}
                <div className="about grid-container">
                    <section className="col-6">
                        <h2>About</h2>
                        <p>
                            A Self-taught Front-End Developer based in India. 
                            I believe in building websites to solve problems, help people and that 
                            the power of the web should be accessible to everyone.
                            Motivated, Organized, and a Curious Person.
                            <br /><br />
                            I am available for freelance work and remote job. 
                        </p>
                    </section>

                    {/* Skills */}
                    <div className="skills-container col-6">
                        <div className="skill-col">
                            <img src="images/html.svg" alt="" />
                            <span>HTML</span>
                        </div>
                        <div className="skill-col">
                            <img src="images/css.svg" alt="" />
                            <span>CSS</span>
                        </div>
                        <div className="skill-col">
                            <img src="images/javascript.svg" alt="" />
                            <span>JavaScript</span>
                        </div>
                        <div className="skill-col">
                            <img src="images/react.svg" alt="" />
                            <span>React</span>
                        </div>
                    </div>

                </div>
                
                <hr />

                {/* Projects */}
                <section className="projects grid-container">
                    <h2 className="col-12">Projects</h2>

                    <div className="project-container col-12">
                        <Project home={true}/>
                    </div>
                </section>

            </div>
        </>
    );
}
