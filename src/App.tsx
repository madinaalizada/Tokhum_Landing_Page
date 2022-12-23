import './App.scss'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router'
import MainPageContainer from './MainPageContainer'

function App() {
  return (
    <Routes>
      <Route path='*' element={<MainPageContainer/>}/>
    </Routes>
  )
}

export default App
