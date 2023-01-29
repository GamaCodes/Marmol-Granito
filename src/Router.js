import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";

import Home from "./pages/home";

import Service from "./pages/service";
import About from "./pages/about";

import NotFound from "./pages/notFound";

import "./App.css";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "./Theme";

class Router extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <div className="page-container">
            <div className="app">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/acerca" element={<About />} />
                <Route path="/servicios" element={<Service />} />
                <Route element={NotFound} />
              </Routes>
              <Footer />
            </div>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    );
  }
}

export default Router;
