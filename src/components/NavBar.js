import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  links.map(link => [0,1,2])

  return <nav>
    <a href="#home" key="home">Home</a>
    <a href="#about" key="about">About</a>
    <a href="#projects" key="projects">Projects</a>
  </nav>;
}

export default NavBar;
