import React from 'react'
import { navigate } from 'gatsby'
import { Link } from 'gatsby'
import { Container, Row, Col } from 'react-bootstrap'
import Button from '../button'
import Logo from '../../assets/svgs/st-logo.svg'
import AmazonIcon from '../../assets/svgs/amazon-seller.svg'
import Facebook from '../../assets/svgs/icons/icon-fb.svg'
import Instagram from '../../assets/svgs/icons/icon-instagram.svg'
import Youtube from '../../assets/svgs/icons/icon-ytb.svg'
import Twitter from '../../assets/svgs/icons/icon-twitter.svg'
import Linkedin from '../../assets/svgs/icons/icon-linkedin.svg'
import Pinterest from '../../assets/svgs/icons/icon-pintrest.svg'
import { footerlinksPrimary } from '../../constants'
import FooterWrapper from './style'

const Footer = () => {
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
    {
      title: 'pinterest',
      logo: Pinterest,
    },
  ]
  return (
    <FooterWrapper>
      <div className="footer-top">
        <Container className="custom-container">
          <div className="d-flex align-items-center justify-content-between footer-top-content">
            <div className="logo">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <div className="auth-buttons">
              <Link to="https://app.sellerterminal.com/auth/sign-in">Sign In</Link>
              <Button
                onClick={() => navigate('https://app.sellerterminal.com/auth/sign-up')}
                variant="primary"
                arrowSimple
                text="Sign Up"
              />
            </div>
          </div>
        </Container>
      </div>
      <div className="footer-mid">
        <Container className="custom-container">
          <Row>
            <Col md={4} sm={6}>
              <AmazonIcon className="footer-img" />
            </Col>
            <Col md={2} sm={3} xs={6}>
              <div className="footer-links d-flex justify-content-between">
                <ul>
                  {footerlinksPrimary.slice(0, 4).map((menu, ind) => (
                    <li key={ind}>
                      <Link to={menu.to} activeClassName="active">
                        <span>{menu.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={2} sm={3} xs={6}>
              <div className="footer-links d-flex justify-content-between">
                <ul>
                  {footerlinksPrimary.slice(4).map((menu, ind) => (
                    <li key={ind}>
                      <Link to={menu.to} activeClassName="active">
                        <span>{menu.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col md={4} sm={6}>
              <div className="footer-social">
                <p>Follow Us at</p>
                <ul>
                  {socialLinks.map((link, i) => {
                    const { title } = link
                    return (
                      <li key={i}>
                        <Link
                          target="_blank"
                          to={`https://www.${title}.com${title === 'linkedin' ? '/company' : ''}/${
                            title === 'youtube' ? '@' : ''
                          }sellerterminal/`}
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
      </div>
      <div className="footer-bottom">
        <Container>
          <p>Copyright © 2023. SellerTerminal. All rights reserved.</p>
        </Container>
      </div>
    </FooterWrapper>
  )
}
export default Footer
