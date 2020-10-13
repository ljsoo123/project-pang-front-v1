import React, { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Experience from "./components/Experience/Experience";

const App = () => {
  const [isLoggedin, setisLoggedin] = useState(true);
  const onLogin = () => {
    setisLoggedin(!isLoggedin);
  };
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" />
      <Route path="/login" component={Login} />
      <Route path="/experience" component={Experience} />
    </BrowserRouter>
  );
};

export default App;
