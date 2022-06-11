import Home from "./Home"
import React from "react"
import { Route, Routes, BrowserRouter } from "react-router-dom"
import Cuisine from "./Cuisine"

const Pages = () =>{
  return(
    
      <Routes>
        <Route path ='/' element={<Home/>} />
        <Route path ='/cuisine/:type' element={<Cuisine/>} />
        <Route path ='/cuisine' element={<Cuisine/>} />

      </Routes>
    

  )
}

export default Pages