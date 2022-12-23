import Header from './Components/Header'
import FirstPage from './Components/FirstPage'
import TokhumTop from './Components/TokhumTop'
import Moduls from './Components/Moduls'
import EasyLevel from './Components/EasyLevel'
import WhatCanBuy from './Components/WhatCanBuy'
import './MainPageContainer.scss';
import OfficePlants from './Components/OfficePlants'
import Subscribe from './Components/Subscribe'
import Footer from './Components/Footer'

const MainPageContainer = () => {
  return (
    <div>
      <Header/>
      <div className="main-pages-container">
        <FirstPage/>
        <TokhumTop/>
        <Moduls/>
      </div>
      <EasyLevel/>
      <WhatCanBuy/>
      <OfficePlants/>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default MainPageContainer
