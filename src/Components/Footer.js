// Import Statements
import { Link } from "react-router-dom";
import SocialLinks from "./SocialLinks";

// Footer Component
export default function Footer(){
    return (
        <footer>
            <div className="contact-link grid-container">
                <h2 className="col-6">Interested in doing a project together?</h2>
                <div className="col-4 contact-me">
                    <Link to="/karishmagarg/contact">
                            Contact Me 
                    </Link>
                </div>
            </div>
            <hr />
            <div className="footer grid-container">
                <span className="col-4 logo-img">
                    KG
                </span>

                <div className="footer-nav-links col-7">
                    <Link to="/karishmagarg/">
                        Home
                    </Link>
                    <Link to="/karishmagarg/project">
                        Projects
                    </Link>
                    <Link to="/karishmagarg/contact">
                        Contact
                    </Link>
                </div>

                <SocialLinks classes="social-links col-1" />

            </div>

        </footer>
    )
}