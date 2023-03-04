import "./App.css"
import Home from "./Home";
import Favorites from "./Favorites";
import Menu from "./Menu";

import Div100vh from 'react-div-100vh'
import { Routes, Route} from "react-router-dom";
import {React, useState} from 'react'

const App = () => {
  const [isOpen, setOpen] = useState(false)

  const handleIsOpen = () => {
    setOpen(!isOpen)
  }

  const closeSideBar = () => {
    setOpen(false)
  }

  return (

    <div className="App">

      <Menu  
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        width={ 200 }
        isOpen={isOpen}
        onOpen={handleIsOpen}
        onClose={handleIsOpen}
        closeSideBar={closeSideBar}/>

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