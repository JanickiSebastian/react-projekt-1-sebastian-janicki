import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer-size-color">
      <div className="boss-container">
        <div className="container-footer">
          <div>
            <p className="footer-text">
              Nazwa firmy - wszelkie prawa zastrzeżone, 2019
            </p>
          </div>
          <div className="direction-icons">
            <FontAwesomeIcon icon={faInstagram} className="fa-2x" style={{ color: "#ffffff" }} />
            <FontAwesomeIcon icon={faFacebookSquare} className="fa-2x" style={{ color: "#ffffff" }} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;