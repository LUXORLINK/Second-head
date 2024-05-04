
import './App.css'

function App() {
  return (
    <div className="App">
      <header className='header' id='header'>
        <div className="container header__container">
          <a href="#" className="text-logo">YOUR LOGO</a>
          <nav className="header__menu">
            <a href="#" className='link'>HOME</a>
            <a href="#" className='link'>SHOP</a>
            <a href="#" className='link'>LOOKBOOK</a>
            <a href="#" className='link'>FEATURES</a>
            <a href="#" className='link'>PAGES</a>
            <a href="#" className='link'>BLOG</a>
          </nav>
          <nav className="header__menu">
             <div className='header__img'></div>
          </nav>
        </div>
      </header>
      <section className='hero'>
        <div className="container">
        <div className="description">
          <p className='trend'>NEW TREND</p>
          <h3 className='title'>COLLUSION</h3>
          <p className='selection-cloth'>An exclusive selection of this season's trends.</p>
          <button className='shop'>DISCOVER</button>
          <button className='shop'>SHOP NOW</button>
        </div>
        </div>
      </section>
    </div>
  )
}

export default App
