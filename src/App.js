import React, { Component } from "react";
import Routes from './routes';
import "./styles.css";
import api from "./services/api";
import Header from "./components/Header";
import Main from './pages/main';
const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;