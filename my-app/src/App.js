// import logo from "./logo.svg";
import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
import "./App.css";
// import FormPropsTextFields from "./components/FormPropsTextFields";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useState } from "react";
import HomePage from "./components/HomePage";
import ChatPage from "./components/ChatPage";
import ProfilePage from "./components/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Home</Link>
        <ul>
          <li>
            <Link to="/chat">Chat</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </header>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/chat">
          <ChatPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
export default App;
