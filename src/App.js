import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BrowserRouter, Route, NavLink } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";

const routes = [
  {
    path: "/home",
    component: "Home",
    main: () => <Home />
  },
  {
    path: "/projects",
    component: "Projects",
    main: () => <Projects />
  },
  {
    path: "/about",
    component: "About",
    main: () => <About />
  },
  {
    path: "/contact",
    component: "Contact",
    main: () => <Contact />
  }
];

function App() {
  return (
    <React.Fragment>
      <Header />
      <BrowserRouter>
        <div className="App">
          {/* <NavLink className="home link" activeClassName="selected" to="/home">
          Home
        </NavLink> */}
          <NavLink
            className="projects link"
            activeClassName="selected"
            to="/projects"
          >
            Projects
          </NavLink>
          <NavLink
            className="about link"
            activeClassName="selected"
            to="/about"
          >
            About
          </NavLink>
          <NavLink
            className="contact link"
            activeClassName="selected"
            to="/contact"
          >
            Contact
          </NavLink>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
              render={() => route.render}
            />
          ))}
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
