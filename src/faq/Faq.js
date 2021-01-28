import React from 'react';
import faq1 from '../images/faq.jpg';
import faq2 from '../images/faq2.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col,Navbar} from 'react-bootstrap';

const Faq = () => {
    return (
        <div className="about-us-area pdt-50">
        <div>
        <Container>
  <Navbar  expand="lg" variant="light" bg="light">
    <Navbar.Brand href="/home">HomePage</Navbar.Brand>
    <Navbar.Brand href="/about">About</Navbar.Brand>
    <Navbar.Brand href="/login">Login</Navbar.Brand>
  </Navbar>
</Container>
        </div>
        <div className="row justify-content-center"><img src={faq2} alt="img" ></img></div>
               
     
            <div className="faq"><Container>
                <Row>
                <Col>1</Col>
                <Col>2</Col>
                <Col>3</Col>
                <Col>4</Col>
                </Row>
                <Row>
                <Col>1</Col>
                <Col>2</Col>
                <Col>3</Col>
                <Col>4</Col>
                </Row>
            </Container></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-8 align-self-center">
                          <div className="about-us-wrap">
                          <img className="thumb rounded container img row justify-content-left" src={faq1} alt="img" />
                          </div>
                     </div>
                    <div className="col-lg-6 offset-lg-1">
                            <div className="about-us-details">
                              <div className="section-title">
                               <h6 className="subtitle">FAQ</h6>
                               <h2 className="title">
                                  Everything is possible. We can help you achieve your goals!
                               </h2>
                               <p>
                                Internet Banking is a convenient way to do banking from the
                                comfort of your home or office. Avoid the queue or delays and
                                try our simple and secure Internet Banking facility for an
                                unmatched online banking experience.
                               </p>
                             </div>   
                             <div className="media media-1">
                                <div className="media-left">
                                {/* <img src={about1} alt="img" /> */}
                                </div>
                                <div className="media-body">
                                <p>
                                    Just login today using your User ID and Password to
                                    experience the Internet Banking
                                </p>
                                </div>
                            </div> 
                            <div className="media media-2">
                <div className="media-left">
                  {/* <img src={about2} alt="img" /> */}
                </div>
                <div className="media-body">
                  <p>
                    With E-Banking Check Account Statement , Do Payments using
                    Net Banking , Order Cheque Book and many more financial and
                    non-financial services
                  </p>
                </div>
              </div>
                            </div>
                           
                    </div>
                 </div>
            </div>
        </div>
    )
}

export default Faq;
