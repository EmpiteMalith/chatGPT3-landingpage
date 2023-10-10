import React from 'react'

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import { Navbar, Brand, Cta } from './components'
import './App.css'
import './index.css'

const App = () => {
  return (
    <div className="app">
      <div className="gradient__bg">
         <Navbar/>
         <Header/>
      </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <Cta/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App