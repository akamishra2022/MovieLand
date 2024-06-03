import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Movie from './pages/Movie'
import Player from './pages/Player'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login/>}></Route>
        <Route exact path="/signup" element={<Signup/>}></Route>
        <Route exact path='/player' element={<Player/>}></Route>
        <Route exact path="/" element={<Movie/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

