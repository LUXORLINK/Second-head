import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Products } from './components/Productswomen'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './pages/Shop'
import Lookbook from './pages/Lookbook'
import Features from './pages/Features'
import Pages from './pages/Pages'
import Blog from './pages/Blog'
import './App.css'
import Products2 from './components/Productsmen'



const App = () => {
    return (
       <>
       <BrowserRouter>
         <Header/>

         <Routes>
         <Route path='/' element={<> <logo/>, <Hero/>, <Products/>, <Products2/> </>} />
          <Route path='/Home' element={<><Hero/>, <Products/>, <Products2/></>} />
          <Route path='/SHOP' element={<Shop/>} />
          <Route path='/LOOKBOOK' element={<Lookbook/>} />
          <Route path='/FEATURES' element={<Features/>} />
          <Route path='/PAGES' element={<Pages/>} />
          <Route path='/BLOG' element={<Blog/>} />
         
         </Routes>
       </BrowserRouter>
       </>
  )
}

export default App
