import React, { useState, useEffect} from 'react';
import { useRouter } from 'next/router'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
const [isOpen, setIsOpen] = useState(false);

const toggle = () => setIsOpen(!isOpen);
const router = useRouter()

function openMenu(){
  if(document.querySelectorAll(".header__nav")[0].classList.contains("open")){
    document.querySelectorAll(".header__nav")[0].classList.remove("open");
  }else{
    document.querySelectorAll(".header__nav")[0].classList.add("open");
  }
}

return (
  <div className={`header md ${props.customClass}`}>
    <div className="container-fluid">
        <div className="container no__padding">
            <div className="row">
                <div className="col-lg-12 no__padding">
                  <Navbar  expand="lg" >
                      <NavbarBrand href="/" className="nav__brand" tabIndex="0">
                        <img loading="lazy" tabIndex="-1" className="top__logo" src={props.masterElements.acf.header_logo} alt="Serve The Moment"/>
                      </NavbarBrand>

                      <NavbarToggler onClick={toggle} />

                      <Nav className="mr-auto main__nav header__nav" navbar>
                        {
                          router.pathname === '/landing'
                          ?
                          <>
                          {
                            props.landingMenu
                            ? props.landingMenu.items.map(menuItem => 
                              <NavItem key={menuItem.ID}>
                                <NavLink href={`/`+menuItem.url.split("/")[3]} tabIndex="0">{menuItem.title}</NavLink>
                              </NavItem>
                              )
                            :""
                          }
                          </>
                          :
                          <>
                          {
                            props.menuItems
                            ? props.menuItems.items.map(menuItem => 
                              <NavItem key={menuItem.ID}>
                                <NavLink href={`/`+menuItem.url.split("/")[3]} tabIndex="0">{menuItem.title}</NavLink>
                              </NavItem>
                              )
                            :""
                          }
                          </>
                        }
                      </Nav>
                      <div className="donate__button">
                        <div className="toggle__menu__button" onClick={openMenu}>
                          <div className="menu__burguer menu__burguer__one"></div>
                          <div className="menu__burguer menu__burguer__two"></div>
                          <div className="menu__burguer menu__burguer__three"></div>
                        </div>
                        <div className="donate__internal__button">
                          <NavItem>
                              <NavLink href={props.masterElements.acf.header_button_link} tabIndex="0">
                                  <button className={`btn main-btn teal`} tabIndex="-1" ><strong>{props.masterElements.acf.header_button_text}</strong></button>
                              </NavLink>
                          </NavItem>
                        </div>
                      </div>
                  </Navbar>
                </div>
            </div>
        </div>

    </div>
  </div>
  );
}

export default Header;