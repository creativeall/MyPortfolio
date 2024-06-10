import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import './About.css';

const About = () => {

    return (

        <>
            <div className='center-vertical bg-dark mb-5' id="About">
                <div className='about-us-sectiont bg-light'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-12 col-lg-6 mb-lg-0'>
                                <div className='img-head'>
                                    <img src='./img/img3.jpg' alt='photo' className="img-fluid" style={{marginLeft:"15%"}} />
                                </div>
                            </div>
                            <div className='col-12 col-lg-6'>
                                <h2 className='text-head'>
                                     ABOUT ME
                                </h2>
                                <div className='break-small mb-2'></div>
                                <p className='text-para container-fluid text-dark'>I am a person who is positive about every aspect of life. There are many things I like to do, to see, and to experience. I am a hard working, honest individual. I am a good timekeeper,I am friendly, helpful and polite.Proven ability to learn new technologies quickly and apply them to real-world problems. Seeking an entry-level position where I can use my skills and knowledge to contribute to a team and make a positive impact on the company.</p>
                                <ul class="about-info mt-4 px-md-0 px-2">
                                    <li class="d-flex text-dark"><b>Name:</b> <span>Supriya Bhandari</span></li>
                                    <li class="d-flex text-dark"><b>Date of birth:</b> <span>January 23,2002</span></li>
                                    <li class="d-flex text-dark"><b>Address:</b> <span>Indore,Madhya Pradesh</span></li>
                                    <li class="d-flex text-dark"><b>Zip code:</b> <span>452005</span></li>
                                    <li class="d-flex text-dark"><b>Email:</b> <span>supriyabhandari1721@gmail.com</span></li>
                                    <li class="d-flex text-dark"><b>Phone: </b> <span>6264377784</span></li>
                                </ul>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default About
