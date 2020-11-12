import React from "react";
import NavBar from "./components/NavBar";
import Introduction from "./components/Introduction";
import ProjectsList from "./components/ProjectsList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import imgSrc from "./images/karim.jpg";
import project1 from "./images/project1.jpg";
import project2 from "./images/project2.png";
import project3 from "./images/project3.jpg";
import project4 from "./images/project4.png";

import "./App.css";

const navLinks = [
  {
    link: "About",
    href: "#about-me",
  },
  {
    link: "Project",
    href: "#projects",
  },
  {
    link: "Contact",
    href: "#about",
  },
];

const projects = [
  {
    projectName: "Mobile Chat App",
    imgSrc: project1,
  },

  {
    projectName: "Connect Web Application",
    imgSrc: project2,
  },
  {
    projectName: "E-commerce App",
    imgSrc: project3,
  },
  {
    projectName: "Portfolio",
    imgSrc: project4,
  },
];
const footerCopyRights = {
  name: "Karim Gharbi",
  year: 2020,
};

function App() {
  return (
    <div>
      <NavBar navLinks={navLinks} name="Karim Gharbi" />
      <Introduction imgSrc={imgSrc} name="Karim Gharbi" />
      <ProjectsList listOfProjects={projects} />
      <Contact />
      <Footer copyrights={footerCopyRights} />
    </div>
  );
}

export default App;
