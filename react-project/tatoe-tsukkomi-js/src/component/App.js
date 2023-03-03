import "./App.css"
import Home from "./Home";
import Favorites from "./Favorites";

import Div100vh from 'react-div-100vh'
import { Routes, Route } from "react-router-dom";
import React from 'react'

const App = () => {
  return (

    <div className="App">

      <Div100vh style={{
        backgroundImage: `url(${process.env.PUBLIC_URL+'/comedian_shadow.png'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }} className="App-body">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Div100vh>
    </div>
  )
}

export default App