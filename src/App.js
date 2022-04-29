import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';
import Trello from './pages/trello';
import "bootswatch/dist/simplex/bootstrap.min.css";
import Profile from './pages/profile';
import Attendance from './pages/attendance';
import Achievments from './pages/achievments';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exactly element={<Home />} />
        <Route path='/trello' element={<Trello/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/attendance' element={<Attendance/>} />
    </Routes>
    </Router>
  );
}

export default App;
