import { useState } from 'react'
import './App.scss'
import Header from './Components/Header'
import FirstPage from './Components/FirstPage'
import TokhumTop from './Components/TokhumTop'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-pages-container">
        <FirstPage/>
        <TokhumTop/>
      </div>
    </div>
  )
}

export default App
