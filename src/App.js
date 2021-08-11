import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import Projects from "./pages/projects";
import "./index.css";
import { StyledApp } from "./styles/styles";
import LanguageContextProvider from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageContextProvider>
      <StyledApp className="Monrope">
        <Router>
          <Switch className="font-loader">
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/about" component={About} />
            <Route path="/projects" component={Projects} />
          </Switch>
        </Router>
      </StyledApp>
    </LanguageContextProvider>
  );
}

export default App;
