import React from 'react'
import Navbar from './Components/Navbar'
import HomePage from './HomePage'
import Context from './Context/ReactContext'
const App = () => {
  return (
    <Context>
      <Navbar/>
      <HomePage/>
    </Context>
  )
}

export default App;
