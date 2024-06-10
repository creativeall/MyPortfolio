import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './Skills.css'
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return <>
    <section className='skill' id="Skills">
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>
                Skills
              </h2>
              <p>I have a degree in computer Application.I have completed BCA in the stream of Computer Application from Shri Vaishnav Institute of Management. I am pursuing MCA from Chameli Devi Group of Institute Indore.Proficiency in HTML, CSS ,JavaScript and React js for front-end development.Experience with responsive design frameworks like Bootstrap and Tailwind.I have worked on some mini projects like TIC TAC TOE,Accordian,Contact page,PasswordGenerator and Animal cards.</p>
              <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                <div className='item'>
                  <img src="./img/html.png" alt='image' style={{width:"34%"}}/>
                  <h5>HTML</h5>
                </div>

                <div className='item'>
                  <img src="./img/CSS-Logo.png" alt='image' />
                  <h5>CSS</h5>
                </div>

                <div className='item'>
                  <img src="./img/JavaScript-Symbol.png" alt='image' />
                  <h5>JavaScript</h5>
                </div>
                <div className='item'>
                  <img src="./img/bootstrap.png" alt='image' />
                  <h5>bootstrap</h5>
                </div>
                <div className='item'>
                  <img src="./img/reactjs.png" alt='image' />
                  <h5>React Js</h5>
                </div>
                <div className='item'>
                  <img src="./img/c++.png" alt='image' />
                  <h5>C++</h5>
                </div>

                <div className='item'>
                  <img src="./img/jquery.png" alt='image' style={{width:"34%"}} />
                  <h5>Jquery</h5>
                </div>
              </Carousel>

            </div>
          </Col>
        </Row>
      </Container>
      {/* <img className='background-image-left' src='./img/background4.jpg' /> */}
    </section>
  </>
}
export default Skills;