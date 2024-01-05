import './App.css';
import CheckOut from './Components/CheckOut';
import Home from './Components/Home';
import LogIn from './Components/LogIn';
import Main from './Components/Main';
import NavBar from './Components/NavBar';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
function App() {
  return (
   <>
   <Router>
   <NavBar/>
    <Routes>
      <Route path="home" element={<Home/>}></Route>
    </Routes>
    <Routes>
      <Route path="main" element={<Main/>}></Route>
    </Routes>
    <Routes>
      <Route path="login" element={<LogIn/>}></Route>
    </Routes>
    <Routes>
      <Route path="checkout" element={<CheckOut/>}></Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;