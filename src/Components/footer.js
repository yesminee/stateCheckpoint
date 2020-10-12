import React from "react";
import { FaLinkedinIn, FaMailBulk, FaGit, FaFacebook, FaInstagram, FaTwitter, FaGoogle } from "react-icons/fa";  //yarn add react-icons
import Card from "react-bootstrap/Card";
import './style.css';

export const Footer =() =>{
    return (
      <div className="foot">
        <Card className="bg-dark text-white">
          <Card.Img src="imageFooter.jpg" alt="Card image" className="koko"/>
          <Card.ImgOverlay>
            <div>
                <div className="content">
                <div className="pro">
                  <a href="https://github.com/"  className="item">
                    <FaGit size="2em" color="white" />
                  </a>
                  <a href="https://www.linkedin.com/" className="item">
                    <FaLinkedinIn size="2em" color="white" />
                  </a>
                  <a href="https://mail.google.com/" className="item">
                    <FaMailBulk size="2em" color="white" />
                  </a>
                </div>
                <p className="rights">©All Rights are Preserved</p>
                <div className="social">
                  <a href="https://mail.google.com/" className="item">
                    <FaGoogle size="2em" color="white" />
                  </a>
                  <a href="https://www.instagram.com/" className="item">
                    <FaInstagram size="2em" color="white" />
                  </a>
                  <a href="https://www.facebook.com/" className="item">
                    <FaFacebook size="2em" color="white" />
                  </a>
                  <a href="https://www.twitter.com/" className="item">
                    <FaTwitter size="2em" color="white" />
                  </a>
                </div>
              </div>
            </div>
          </Card.ImgOverlay>
        </Card>
      </div>
    );
}
export default Footer;
