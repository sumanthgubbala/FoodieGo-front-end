import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './components/Signup';
import LandingPage from './components/LandingPage';
import Cart from './components/Cart';
import CartPage from './pages/CartPage';
import MyOrder from './pages/MyOrder';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cart" element={<CartPage/>}/>
          <Route path="/orders" element={<MyOrder/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
