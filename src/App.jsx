import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Products } from './components/Products'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Lookbook from './pages/Lookbook'
import Features from './pages/Features'
import Pages from './pages/Pages'
import Blog from './pages/Blog'
import logo from './pages/Logo'
import './App.css'



const App = () => {
    return (
       <>
       <BrowserRouter>
         <Header/>

         <Routes>
         <Route path='/' element={<> <logo/>, <Hero/>, <Products/> </>} />
          <Route path='/Home' element={<Home/>} />
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
