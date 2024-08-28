import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import Button from '../../UiComponents/Button';
import Calendly from '../../PagesComponents/Calendly';
import Facebook from '../../../assets/svgs/st-facebook.svg';
import Instagram from '../../../assets/svgs/st-insta.svg';
import Youtube from '../../../assets/svgs/st-youtube.svg';
import Twitter from '../../../assets/svgs/st-twitter.svg';
import Linkedin from '../../../assets/svgs/st-linkedin.svg';

import { footerlinksPrimary } from '../../../constants';

import FooterWrapper from './style';

const Footer = () => {
  const [openCalendly, setOpenCalendly] = useState(false);

  const socialLinks = [
    {
      title: 'facebook',
      logo: Facebook,
    },
    {
      title: 'instagram',
      logo: Instagram,
    },
    {
      title: 'youtube',
      logo: Youtube,
    },
    {
      title: 'twitter',
      logo: Twitter,
    },
    {
      title: 'linkedin',
      logo: Linkedin,
    },
  ];

  return (
    <FooterWrapper>
      <div className="footer-top">
        <Container className="custom-container">
          <div className='d-flex justify-content-center footer-respond'>
            <div className='d-flex align-items-center gap-4'>
              <h2 className='mb-0 d-md-block d-none'>We Respond Fast.</h2>
              <Button text='Schedule a Call' className='btn-secondary' arrow="true" variant="primary" onClick={() => setOpenCalendly(true)} />
            </div>
          </div>
        </Container>
      </div>
      <div className="footer-mid">
        <Container className="custom-container">
          <div className='grid-container'>
            <div className="footer-links">
              <ul>
                {footerlinksPrimary.slice(0, 3).map((menu, ind) => (
                  <li key={ind}>
                    <Link to={menu.to} activeClassName="active">
                      <span>{menu.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-links">
              <ul>
                {footerlinksPrimary.slice(3, 6).map((menu, ind) => (
                  <li key={ind}>
                    <Link to={menu.to} activeClassName="active">
                      <span>{menu.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="footer-links">
              <ul>
                {footerlinksPrimary.slice(6).map((menu, ind) => (
                  <li key={ind}>
                    <Link to={menu.to} activeClassName="active">
                      <span>{menu.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='d-flex justify-content-lg-end newsletter-div'>
              <div className='newsletter'>
                <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                <span>The latest news, articles, and resources, sent to your inbox weekly.</span>
                <div className='nl-input'>
                  <Row>
                    <Col xs={8} lg={7}>
                      <input placeholder='Enter your email' />
                    </Col>
                    <Col xs={4} lg={5}>
                      <Button text='Subscribe' variant="primary" />
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container className='custom-container'>
        <Row className="footer-bottom">
          <Col lg={3} className='ps-0 order-1'>
            <div className="logo bottom-padding">
              <Link to="/">
                <img src='/st-white-logo.svg' alt='seller terminal' title='seller terminal' loading='lazy' />
              </Link>
            </div>
          </Col>
          <Col lg={6} className='bottom-border d-flex align-items-center justify-content-center order-3 order-lg-2'>
            <div className='bottom-padding text-center copy-right'>
              <p>Copyright © 2023. SellerTerminal. All rights reserved.</p>
            </div>
          </Col>
          <Col lg={3} className='d-flex align-items-center justify-content-center justify-content-lg-end pe-0 order-2 order-lg-3'>
            <div className="footer-social d-flex align-items-center gap-3 bottom-padding">
              <p>Follow Us at</p>
              <ul>
                {socialLinks.map((link, i) => {
                  const { title } = link
                  return (
                    <li key={i}>
                      <Link
                        target="_blank"
                        to={`https://www.${title}.com${title === 'linkedin' ? '/company' : ''}/${title === 'youtube' ? '@' : ''
                          }sellerterminal/`}
                        title={title}
                      >
                        <link.logo />
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
      <Calendly show={openCalendly} onHide={()=> setOpenCalendly(false)} />
    </FooterWrapper>
  )
}
export default Footer
