import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
<<<<<<< HEAD
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
=======
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';
import Cart from './components/Cart';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </Router>
>>>>>>> 5b8e5758c8e5f2dd4aa8fb156e911d1998521dc6
    </>
  )
}

export default App
