import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import im1 from "./logo1.png";
const Navbar = () => {
  return (
    <>
      
<Nav>
        <img src={im1} class="logo" alt=" found" width="100" height="70"/>
        <Bars />
  
        <NavMenu>
        
        <NavLink to='/Home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/contact' activeStyle>
            Contact Us 
          </NavLink>
          <NavBtn class="btn next-btn">
          <NavBtnLink to='/form'>Start Therapy</NavBtnLink>
        </NavBtn>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signup'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
            
    </>
  );
};
  
export default Navbar;