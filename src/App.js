import './App.css';
// import Home from './Components/Home';
import LogIn from './Components/LogIn';
import MainItem from './Components/MainItem';
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
   {/* <Home/> */}
    <Routes>
      <Route path="mainitem" element={<MainItem/>}></Route>
    </Routes>
    <Routes>
      <Route path="login" element={<LogIn/>}></Route>
    </Routes>
   </Router>
   </>
  );
}

export default App;