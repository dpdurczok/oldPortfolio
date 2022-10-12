import React from 'react'
import './App.css'

import { Art, Games, Projects, Header} from './containers';
import { Navbar, CTA } from './components'

const App = () => {
  return (
    <div className="App">
        <div className="gradient__bg">
            <Navbar />
            <Header />
        </div>
        <Art />
        <Games />
        <Projects />
        <CTA />
    </div>
  )
}

export default App