import { Link } from "react-router-dom";

// Navigation Bar Component
export default function Nav(){

    // Function to show/hide navmenu on mobile
    const show = () => {
        const hamburger = document.querySelector(".hamburger");
        const navMenu = document.querySelector(".nav-menu");
        const navLink = document.querySelectorAll(".nav-item");

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");

        navLink.forEach((item) => {
            item.addEventListener("click", function(){
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            })
        })

    }

    return (
        <nav className="grid-container">

            {/* Logo */}
            <span className="logo logo-img">KG</span>

            {/* Navigation Menu */}
            <ul className="nav-menu col-6">
                <li className="nav-item">
                    <Link to="/karishmagarg/">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/karishmagarg/project">
                        Projects
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/karishmagarg/contact">
                        Contact
                    </Link>
                </li>
            </ul>
            
            {/* Hamburger */}
            <div className="hamburger" onClick={show}>
                <img src="images/hamburger.svg" alt="Hamburger Icon to open navigation menu in mobile" width='30' height='40'/>
            </div>

        </nav>
    )
}