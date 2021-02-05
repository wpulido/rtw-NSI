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

const Footer = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter()

  return (
    <footer className={`header md ${props.customClass}`}>
      <div className="container-fluid">
        <div className="row">
                  <div className="col-lg-5 footer__logo ">
                        <a href="https://werepair.org/" target="_BLANK">
                          <img loading="lazy" className="bottom__logo" src={props.masterElements.acf.footer_logo} alt="Powered by Repair The World"/>
                        </a>                

                  </div>
                  <div className="col-lg-7 footer__menu no__padding">
                    <Navbar  expand="lg" >
                        <NavbarToggler onClick={toggle} />


                        <Nav className="mr-auto main__nav" navbar>
                        {
                          router.pathname === '/landing'
                          ?
                          <>
                          {
                            props.landingMenu
                            ? props.landingMenu.items.map(menuItem => 
                              <NavItem key={menuItem.ID}>
                                <NavLink href={`/`+menuItem.url.split("/")[3]}>{menuItem.title}</NavLink>
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
                                <NavLink href={`/`+menuItem.url.split("/")[3]}>{menuItem.title}</NavLink>
                              </NavItem>
                              )
                            :""
                          }
                          </>
                        }
                        </Nav>
                    </Navbar>
                      
                    <div className="footer__partners">
                      <div
                        className={`poppins bold white-text text-center`}
                        dangerouslySetInnerHTML={{ __html: props.masterElements.acf.footer_partners
                        }}
                      />
                    </div>

                    {/* <div className="footer__partners">
                      <h4 className={"fake-hfour"}>Our Partners</h4>
                      <div className="footer__partners__wrapper" >
                        {
                          
                          props.partners.map((partner, index) => (
                            <>
                            {
                              partner.acf.partner_website.length > 0
                              ?
                                <a href={partner.acf.partner_website} key={index} style={{"fontWeight" : "Bold"}}>
                                  <p
                                  className={`poppins bold white-text text-center`}
                                  dangerouslySetInnerHTML={{ __html: partner.title.rendered + "<span> | </span>"}}
                                  /> 
                                </a>
                              :<p style={{"pointerEvents" : "none"}}
                                className={`poppins bold white-text text-center`}
                                dangerouslySetInnerHTML={{ __html: partner.title.rendered + "<span> | </span>"}}
                                /> 
                            }
                            </>
                          
                          ))
                        }
                      </div>
                      
                    </div> */}

                  </div>
              </div>
        {
        props.customClass === "bottom"
        ?
        <>
            <div className="container bottom__menu">
                <div className="row">
                    <div className="col-lg-12">
                        <ul>
                        {
                          router.pathname === '/landing'
                          ?
                          <>
                          {
                            props.landingMenu
                            ? props.landingMenu.items.map((menuItem, index) => 
                              <a href={`/`+menuItem.url.split("/")[3]} key={index}>
                               <li>{menuItem.title}</li>
                              </a>
                              )
                            :""
                          }
                          </>
                          :
                          <>
                          {
                            props.menuItems
                            ? props.menuItems.items.map((menuItem, index) => 
                              <a href={`/`+menuItem.url.split("/")[3]} key={index}>
                              <li>{menuItem.title}</li>
                              </a>
                              )
                            :""
                          }
                          </>
                        }
                        </ul>
                    </div>
                </div>
            </div>
        </>
        :" "
        }
      </div>
    </footer>
  );
}

export default Footer;