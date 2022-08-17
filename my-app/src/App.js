// import logo from "./logo.svg";
import React from "react";
// import { useEffect, useState } from "react";
import "./App.css";
import FormPropsTextFields from "./components/FormPropsTextFields";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import { useState } from "react";

// const light = {
//   palette: {
//     mode: "light",
//   },
// };

// const dark = {
//   palette: {
//     mode: "dark",
//   },
// };

function App() {
  // const [isDarkTheme, setIsDarkTheme] = useState(false);

  // const changeTheme = () => {
  //   setIsDarkTheme(!isDarkTheme);
  // };
  return (
    // <ThemeProvider
    //   changeTheme={changeTheme}
    //   theme={isDarkTheme ? createTheme(dark) : createTheme(light)}
    // >

    <FormPropsTextFields />
    // {/* </ThemeProvider> */}
  );
}
export default App;
