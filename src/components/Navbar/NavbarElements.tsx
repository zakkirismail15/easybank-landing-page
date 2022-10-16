import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Logo from "../../assets/svg/logo.svg";

export const NavLogo = styled(Link)`
  background: url(${Logo});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 60px;
  width: 200px;
  cursor: pointer;
`;

export const Nav = styled.nav`
  background: var(--White);
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem calc((100vw - 1000px) / 2);
  z-index: 10;
`;

export const NavLink = styled(Link)`
  color: var(--Grayish-Blue);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  ::after {
    content: "";
    background: linear-gradient(
      90deg,
      hsla(136, 65%, 51%, 1) 0%,
      hsla(192, 70%, 51%, 1) 100%,
      hsla(192, 70%, 51%, 1) 100%
    );
    position: absolute;
    bottom: 0;
    width: 90%;
    height: 5px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    opacity: 0;
  }

  :hover {
    ::after {
      transition: all 0.2s ease-in-out;
      opacity: 100;
    }
    color: var(--Dark-Blue);
  }

  &.active {
    ::after {
      content: "";
    }
    background: black;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: var(--Grayish-Blue);

  @media screen and (max-width: 700px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const Close = styled(CgClose)`
  display: none;
  color: var(--Grayish-Blue);

  @media screen and (max-width: 700px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 100%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  height: 100%;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 999px;
  background: linear-gradient(
    90deg,
    hsla(136, 65%, 51%, 1) 0%,
    hsla(192, 70%, 51%, 1) 100%,
    hsla(192, 70%, 51%, 1) 100%
  );
  display: flex;
  position: relative;
  padding: 0px 20px;
  justify-content: center;
  align-items: center;
  color: var(--White);
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  font-size: 16px;
  font-weight: 700;
  height: 40px;

  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 100px;
    background-color: hsla(0, 0%, 100%, 0.5);
    opacity: 0;
  }

  &:hover {
    transition: all 0.2s ease-in-out;
    ::after {
      opacity: 100;
    }
  }
`;

export const BackgroundFrame = styled.div`
  display: none;
  position: absolute;
  top: 80px;
  right: 0px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.7) 1%, rgba(0, 0, 0, 0.2) 100%);
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: calc(100vh - 80px);
  z-index: 20px;

  @media screen and (max-width: 700px) {
    display: flex;
  }
`;

export const NavPopupMenu = styled.div`
  display: none;
  position: relative;
  left: 50%;
  top: 40px;
  transform: translate(-50%, 0);
  background-color: var(--White);
  width: 90%;
  height: 40%;
  z-index: 20;
  border-radius: 5px;
  padding: 10px;

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
`;

export const NavLinkM = styled(Link)`
  color: var(--Dark-Blue);
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
