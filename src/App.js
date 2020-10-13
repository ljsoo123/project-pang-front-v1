import React, { useState } from "react";
import Header from "./components/Header/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
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
      <Switch>
        <Route exact path="/" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/experience" component={Experience} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

const NotFound = () => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        top: "0",
        left: "0",
        color: "#2D3036",
        fontSize: "50px",
        fontWeight: "bolder",
      }}
    >
      404 NOT FOUND
    </div>
  );
};
export default App;
