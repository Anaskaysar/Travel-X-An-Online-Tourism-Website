import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Button } from '../../../Components/Button/Button';
import useAuth from '../../../hooks/useAuth';
import './Navbar.css';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {

  const {user,logOut}=useAuth();

  const [nav,setNav]=useState(false);

  const changeBackground=()=>{
      if(window.scrollY >=50){
          setNav(true);
      }
      else{
          setNav(false);
      }
  }
  window.addEventListener('scroll',changeBackground);
  const userIcon=<FontAwesomeIcon icon={faUser} className='text-black mt-1 text-2xl'/>
  
  return (
      <div>
          <nav className={nav?"nav active":"nav"}>
              <Link to="/" className="logo" >
                  <i className="fas fa-plane-departure mr-1"></i>
               TreavelX
              </Link>

              <input className="menu-btn" type='checkbox' id="menu-btn" />

              <label htmlFor="menu-btn" className='menu-icon'>
                  <span className='nav-icon'></span>
              </label>

              <ul className="menu">
                  <li> <Link to="/home">Home</Link> </li>
                  <li> <Link to="/packages">Packages</Link> </li>
                  <li> <Link to="/managepackages">Manage Trips</Link> </li>
                  <li> <Link to="/about">About</Link> </li>

                  <NavDropdown  title={userIcon} id="navbarScrollingDropdown">
                              <NavDropdown.Item >
                                  {user.displayName}
                              </NavDropdown.Item>

                              <NavDropdown.Item>
                              <Link to="/myorder">My Package</Link>
                              </NavDropdown.Item>

                              <NavDropdown.Item>
                              <Link to="/allorders">All Ordered Package</Link>
                              </NavDropdown.Item>  
                              
                              <NavDropdown.Item >
                                {user?.email ?
                                <Button onClick={logOut} variant="danger">Logout</Button> :
                                <Link as={Link} to="/login">Login</Link>
                                }
                              </NavDropdown.Item>
                  </NavDropdown>
              </ul>
          </nav>
      </div>

);
};
export default Navbar;