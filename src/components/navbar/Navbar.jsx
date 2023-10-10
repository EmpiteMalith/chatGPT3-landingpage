import React, {useState} from 'react'
import {RiMenuLine, RiCloseLine} from 'react-icons/ri'
import logo from '../../assets/logo.svg'
import './navbar.css'

export const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)

  const Menu = () => (
    <>
      <a href="#home">Home</a>
      <a href="#wpgpt3">What is GPT3?</a>  
      <a href="#possibility">Open AI</a>
      <a href="#features">Case Studies</a>
      <a href="#blog">Library</a>
    </>
  )

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpts__navbar-links__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links__container">
          <Menu/>
        </div>
      </div>
      <div className="gpt3__navbar-sign">
        <button>Sign in</button>
        <button>Sign up</button>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={()=> setToggleMenu(false)}/>
          : <RiMenuLine color="#fff" size={27} onClick={()=> setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="gpt3__navbar-menu__container scale-up-center">
            <div className="gpt3__navbar-menu__container-links">
            <Menu/>
            <div className="gpt3__navbar-menu__container-links-sign">
            <button>Sign in</button>
            <button>Sign up</button>
          </div>
            </div>
          </div>
        )
        }
      </div>
    </div>
  )
}

export default Navbar
