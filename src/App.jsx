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
import Restaurant from './pages/Restaurant';
import DashBoard from './pages/DashBoard';
import ManageRestaurant from './pages/ManageRestaurant';
import EditRestaurant from './components/EditRestaurant';
import OrderRequests from './pages/OrderRequests';
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
          <Route path="/add-restaurant" element={<Restaurant />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/manage-restaurants" element={<ManageRestaurant />} />
          <Route path="/restaurant/edit/:id" element={<EditRestaurant />} />
          <Route path="/orders-request" element={<OrderRequests />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
