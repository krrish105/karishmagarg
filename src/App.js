// Import Statements
import Nav from "./Components/Nav";
import Footer from "./Components/Footer";
import "./style.css";
import Home from "./Components/Home";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        
        {/* Navigation Bar */}
        <Nav />
        
        <hr />

        {/* Main */}
        <main>
          <Routes>
            <Route exact path='/karishmagarg/' element={ <Home /> }></Route>
            <Route exact path='/karishmagarg/project' element={ <Project /> }></Route>
            <Route exact path='/karishmagarg/contact' element={ <Contact /> }></Route>
          </Routes>
        </main>
        <hr />

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
