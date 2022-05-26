import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// CSS
import GlobalStyle from "./theme/globalStyle";
import { ThemeProvider } from "styled-components";
import themeStyled from "./theme/schema.json";

// Pages
import Home from "./pages/Home";
import Userindex from "./pages/Userindex";
import Settings from "./pages/Settings";
import Community from "./pages/Community";
import PageNotFound from "./pages/PageNotFound";

// Components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

/**
 * @file index.js is the home page for this app
 * @author Git504 for OPENCLASSROOMS
 * @see <a href="https://github.com/git504">Git504 Page<a/>
 */

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <ThemeProvider theme={themeStyled}>
        <Header />
        <Sidebar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/user/:id" element={<Userindex />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/community" element={<Community />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </ThemeProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
