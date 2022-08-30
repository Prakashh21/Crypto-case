import React from "react";
import Navbar from "./components/Navbar";
import {ThemeProvider} from './context/themeContext'

function App() {
  return <ThemeProvider>
    <Navbar />
  </ThemeProvider>
    
}

export default App;
