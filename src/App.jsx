import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './components/SignUp';
import NavBar from './components/NavBar';
import Restaurant from './pages/Restaurant';
import MyOrders from './pages/MyOrders';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/orders" element={<MyOrders />} />
      </Routes>
    </>
  )
}

export default App
