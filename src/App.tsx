import { useState } from 'react'
import './App.scss'
import Header from './Components/Header'
import FirstPage from './Components/FirstPage'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-pages-container">
        <FirstPage/>
      </div>
    </div>
  )
}

export default App
