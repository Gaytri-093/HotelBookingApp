import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import {BrowserRouter, Route, Link, Routes} from "react-router-dom"
import HomeScreen from './screens/HomeScreen'
import BookingScreen from './screens/BookingScreen'
import RegisterScreen from './screens/RegisterScreen'
import LoginScreen from './screens/LoginScreen'


function App() {
  

  return (
    <>
       <div className="App">
       <Navbar/>
       <BrowserRouter>
      <Routes>
      <Route path="/home" exact Component={HomeScreen}/>
      <Route path='/book/:roomid' exact Component={BookingScreen}/>
      <Route path='/register' exact Component={RegisterScreen}/>
      <Route path='/login' exact Component={LoginScreen}/>
      </Routes>
       </BrowserRouter>
       
       </div>
    </>
  )
}

export default App
