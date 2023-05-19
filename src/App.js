import React, { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// let name = "<b>Commando</b>";

function App() {
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#33363a";
      showAlert(" Dark mode has been enabled.", "success");
      document.title = "TextUtils - Home | Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled.", "success");
      document.title = "textUtils | Home";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout((showAlert) => {
      setAlert(null);
    }, 1500);
  };
  const [mode, setMode] = useState("light"); // Whether the dark mode is enabled or not.
  const [alert, setAlert] = useState(null);
  return (
    <>
      <Navbar title ="TxtEdtrs" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      {/* <About/> */}
      <TextForm showAlert={showAlert} heading="Enter your text here" mode={mode}/>
    </>
  );
}

export default App;
