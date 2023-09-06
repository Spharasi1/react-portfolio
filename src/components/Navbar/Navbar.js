import React, { useState } from 'react';
import "./Navbar.css";
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../assets/contact.png'
import hamIcon from '../../assets/menu.png'
function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <nav className='navbar'>
      <img src={logo} alt="site-logo" className='logo' />
      <div className="menu">
        <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuList">About</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-10} duration={500} className="desktopMenuList">Skills</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-40} duration={500} className="desktopMenuList">Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="desktopMenuList">Contact</Link>
      </div>
      <button className="desktopMenuButton" onClick={()=>{
        document.getElementById('contact').scrollIntoView({behavior:"smooth"});
      }}>
        <img src={contactImg} alt="" className="desktopMenuIcon" /> Contact Me</button>

        <img src={hamIcon} alt="site-logo" onClick={()=>setShowMenu(!showMenu)} className='hamIcon' />
        <div className="hamMenu" style={{display:showMenu?'flex':'none'}}>
        <Link activeClass='active' to='hero' spy={true} smooth={true} offset={-100} duration={500} className="mobileMenuList" onClick={()=>setShowMenu(false)}>Home</Link>
        <Link activeClass='active' to='about' spy={true} smooth={true} offset={-100} duration={500} className="mobileMenuList" onClick={()=>setShowMenu(false)}>About</Link>
        <Link activeClass='active' to='skill' spy={true} smooth={true} offset={-10} duration={500} className="mobileMenuList" onClick={()=>setShowMenu(false)}>Skills</Link>
        <Link activeClass='active' to='project' spy={true} smooth={true} offset={-40} duration={500} className="mobileMenuList" onClick={()=>setShowMenu(false)}>Projects</Link>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-50} duration={500} className="mobileMenuList" onClick={()=>setShowMenu(false)}>Contact</Link>
      </div>

      </nav>
    </div>
  )
}

export default Navbar