import React, { useState, useEffect } from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Projects from "./pages/projects";
import "./index.css";
import { StyledApp } from "./styles/styles";
//import styled, { ThemeProvider } from "styled-components";
//import { lightTheme, darkTheme } from "./themes.js";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", hideMenu);

    return () => {
      window.removeEventListener("resize", hideMenu);
    };
  });

  //const [theme, setTheme] = useState("light");

  // const themeToggler = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };

  return (
    <>
      {/* <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}> */}
      <StyledApp className="Monrope">
        <Router>
          <Switch className="font-loader">
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </Router>
      </StyledApp>
      {/* </ThemeProvider> */}
    </>
  );
}

export default App;
