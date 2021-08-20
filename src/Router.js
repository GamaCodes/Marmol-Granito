import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Transition, TransitionGroup } from "react-transition-group";
import { play, exit } from "./timelines";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer";

import Home from "./pages/home";

import Service from "./pages/service";
import About from "./pages/about";
import Experience from "./pages/experience";

import NotFound from "./pages/notFound";

import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./Theme";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div className="page-container">
            <div className="app">
              <Navbar />
              <Route
                render={({ location }) => {
                  const { pathname, key } = location;

                  return (
                    <TransitionGroup component={null}>
                      <Transition
                        key={key}
                        appear={true}
                        onEnter={(node, appears) =>
                          play(pathname, node, appears)
                        }
                        onExit={(node, appears) => exit(node, appears)}
                        timeout={{ enter: 750, exit: 150 }}
                      >
                        <Switch location={location}>
                          <Route exact path="/" component={Home} />
                          <Route exact path="/acerca" component={About} />
                          <Route exact path="/servicios" component={Service} />
                          <Route
                            exact
                            path="/experiencia"
                            component={Experience}
                          />
                          <Route component={NotFound} />
                        </Switch>
                      </Transition>
                    </TransitionGroup>
                  );
                }}
              />
            </div>
            <Footer />
          </div>
        </ThemeProvider>
      </BrowserRouter>
    );
  }
}

export default Router;
