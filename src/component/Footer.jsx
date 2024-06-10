import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import HomeIcon from '@mui/icons-material/Home';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import './Footer.css';

const Footer = () => {
  return (
     <>
<footer class="text-center text-lg-start bg-body-tertiary text-muted">

  <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" style={{backgroundColor:"dark-gray"}} >
  
    <div class="me-5 d-none d-lg-block" style={{color:"dark-gray"}}>
      <span>Get connected with us on social networks:</span>
    </div>
   
    <div>
      <a href="https://www.linkedin.com/in/supriya-bhandari-028917235/" class="me-4 text-reset" target='_hello'>
         <LinkedInIcon />
      </a>
      <a href="https://github.com/creativeall" class="me-4 text-reset" target='_hello'>
        <GitHubIcon/>
      </a>
      <a href="https://telegram.org/" class="me-4 text-reset" target='_hello'>
        <TelegramIcon/>
      </a>
    </div>
  
  </section>

  <section class="" >
    <div class="container-fluid text-center text-md-start">
   
      <div class="row mt-3">
     
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>About me
          </h6>
          <p>
          Hi I am Supriya and I am a frontend developer as a fresher with no experience. This website shows my skills and how much I have learned.
          </p>
        </div>
       
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            Links
          </h6>
          <p>
            <a href="#Banner" class="text-reset">Home</a>
          </p>
          <p>
            <a href="#About" class="text-reset">About</a>
          </p>
          <p>
            <a href="https://salmon-rosanne-6.tiiny.site" target='_v' class="text-reset">Resume</a>
          </p>
          <p>
            <a href="#ProjectCard" class="text-reset">Project</a>
          </p>
        </div>
  
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
          <p> <HomeIcon />Indore,Madhya Pradesh</p>
          <p>
             <EmailIcon />
            supriyabhandari1721@gmail.com
          </p>
          <p><CallIcon />+91 6264377784</p>
        </div>
     
      </div>
   
    </div>
  </section>

  <div class="text-center p-4" style={{backgroundColor: "gray"}}>
    © 2024 Copyright:
    <a class="text-reset fw-bold" href="https://mdbootstrap.com/">SupriyaBhandari</a>
  </div>

</footer>

     </>
  )
}

export default Footer;
