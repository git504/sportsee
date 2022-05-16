import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// CSS
import GlobalStyle from "./theme/globalStyle";

// Pages
import Home from "./pages/Home";
import User from "./pages/User";
import PageNotFound from "./pages/PageNotFound";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Routes>
        <Route path="/*" element={<PageNotFound />} />
        <Route index element={<Home />} />
        <Route path="/user/:id" element={<User />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
