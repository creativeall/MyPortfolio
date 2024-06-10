import React, { useEffect, useState } from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import './NavBar.css'


function NavBar() {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }
  return (
    <>
      <Navbar expand="lg" className={scrolled ? "scrolled" : ""} id="Navbar">
        <Container>
          <Navbar.Brand href="#home"><img src="./img/logo2.png" alt="logo" height={110} /></Navbar.Brand>
        
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#Banner" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#About" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href='https://salmon-rosanne-6.tiiny.site' target='_blank' className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('resume')}>Resume</Nav.Link>
              <Nav.Link href="#ProjectCard" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <Nav.Link href="#Contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
              <a href="https://www.linkedin.com/in/supriya-bhandari-028917235/" target="_s"><LinkedInIcon className="icon" style={{height:"35px", width:"35px"}}/></a>
                <a href='https://github.com/creativeall' target="_s"><GitHubIcon className="icon" style={{height:"35px", width:"35px"}} /></a>
                <a href="https://telegram.org/" target="_v"><TelegramIcon  className="icon" style={{height:"35px", width:"35px"}}/></a>

              </div>
              <a href="#Contact"> <button className="vvd"><span>Let's Connect</span></button></a>
            </span>
            {/* <button className="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
       
       
    </>
  );
}

export default NavBar;
