import Header from './Components/Header'
import FirstPage from './Components/FirstPage'
import TokhumTop from './Components/TokhumTop'
import Moduls from './Components/Moduls'
import EasyLevel from './Components/EasyLevel'
import WhatCanBuy from './Components/WhatCanBuy'
import './MainPageContainer.scss';

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
    </div>
  )
}

export default MainPageContainer
