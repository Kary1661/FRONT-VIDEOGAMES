import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Header from './components/Header/Header'
import Success from './components/Success/Success'
import Addgame from './pages/Addgame/Addgame'
import Detail from './pages/Detail/Detail'
import Home from './pages/Home/Home'
import Landing from './pages/Landing/Landing'
import SearchResults from './pages/Search_results/SearchResults'
import './App.css';
import axios from 'axios'

//axios.defaults.baseURL = 'http://localhost:3001/';//
axios.default.baseURL = 'https://vercel.com/karina-pospos-projects/backend-de-prueba/GsNVEk7UEwqD7rCx92h2HGFSZVUy';

function App() {
  const location = useLocation()
  return (
    <div className="App">
      {location.pathname === '/' ? '' : <Header />}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/add-game" element={<Addgame />} />
        <Route path="/search-results" element={<SearchResults />} />
        <Route path="/add-game/success" element={<Success />} />
      </Routes>
    </div>
  )
}

export default App
