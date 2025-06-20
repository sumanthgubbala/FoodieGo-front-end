import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
<<<<<<< HEAD
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
=======
import Signup from './components/Signup';
>>>>>>> 1abb9d885e74a93305abd95ca34d54d049adc734

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/signup" element={<SignUp />} />
=======
        <Route path="/signup" element={<Signup/>}/>
>>>>>>> 1abb9d885e74a93305abd95ca34d54d049adc734
      </Routes>
    </>
  )
}

export default App
