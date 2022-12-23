import { useState } from 'react'
import './App.scss'
import Header from './Components/Header'
import FirstPage from './Components/FirstPage'
import TokhumTop from './Components/TokhumTop'
import Moduls from './Components/Moduls'
import EasyLevel from './Components/EasyLevel'

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="main-pages-container">
        <FirstPage/>
        <TokhumTop/>
        <Moduls/>
      </div>
      <EasyLevel/>
    </div>
  )
}

export default App
