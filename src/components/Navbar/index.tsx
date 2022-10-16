import React, { useEffect, useState } from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
  NavLogo,
  Close,
  NavPopupMenu,
  BackgroundFrame,
  NavLinkM,
} from "./NavbarElements";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const menuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Nav>
        <NavLogo to='/' />
        {isMenuOpen ? <Close onClick={menuHandler} /> : <Bars onClick={menuHandler} />}
        <NavMenu>
          <NavLink to='/home'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/contact'>Contact</NavLink>
          <NavLink to='/blog'>Blog</NavLink>
          <NavLink to='/career'>Careers</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/invite'>Request Invite</NavBtnLink>
        </NavBtn>
      </Nav>
      {isMenuOpen && (
        <BackgroundFrame onClick={() => setIsMenuOpen(false)}>
          <NavPopupMenu>
            <NavLinkM to='/home'>Home</NavLinkM>
            <NavLinkM to='/about'>About</NavLinkM>
            <NavLinkM to='/contact'>Contact</NavLinkM>
            <NavLinkM to='/blog'>Blog</NavLinkM>
            <NavLinkM to='/career'>Careers</NavLinkM>
          </NavPopupMenu>
        </BackgroundFrame>
      )}
    </>
  );
};

export default Navbar;
