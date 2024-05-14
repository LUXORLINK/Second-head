import { NavLink } from "react-router-dom"


export const Header = () => {
    return (
        <header className='header container' id='header'>
           <NavLink to='/' className="text-logo">YOUR LOGO</NavLink>
            <nav className="header__menu">
              <NavLink to='Home' className='link'>HOME</NavLink>
                <NavLink to='Shop' className='link'>SHOP</NavLink>
                 <NavLink to='Lookbook' className='link'>LOOKBOOK</NavLink>
                  <NavLink to='Features' className='link'>FEATURES</NavLink>
                 <NavLink to='Pages' className='link'>PAGES</NavLink>
               <NavLink to='Blog' className='link'>BLOG</NavLink>
            </nav>
            <nav className="header__menu">
            <div className='header__img'></div>
            </nav>
        </header>
         )
        }
        export default Header

        