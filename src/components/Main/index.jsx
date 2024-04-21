import React from 'react'
import Navbar from './Navbar'
import About from './About'
import Top from './Top'
import Combo from './Combo'
import Sale from './Sale'
import Categories from './Categories'
import Company from './Company'
import Grid from './GridBlock'

const Main = () => {
  return (
    <div>
        <Navbar/>
        <About/>
        <Top/>
        <Combo/>
        <Sale/>
        <Categories/>
        <Company/>
        <Grid/>
    </div>
  )
}

export default Main