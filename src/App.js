import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import {ThemeProvider} from './context/themeContext'
import Home from './routes/Home';
import Signin from './routes/Signin';
import Signup from './routes/Signup';
import Account from './routes/Account';
// import Navbar from "./components/Navbar";

function App() {
  return <ThemeProvider>
    <Navbar />
    <Routes>
          <Route path='/' element={<Home coins={coins} />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={<Account />} />
          <Route path='/coin/:coinId' element={<CoinPage />}>
            <Route path=':coinId' />
          </Route>
        </Routes>
      
  </ThemeProvider>
    
}

export default App;
