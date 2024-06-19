import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Distinctio, perspiciatis eveniet provident inventore dolor neque?
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>ENTREPRISE</h2>
          <ul>
            <li>Accueil</li>
            <li>À propos</li>
            <li>Livraison</li>
            <li>Politique de confidentialité</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Contactez-nous</h2>
          <ul>
            <li>+212 0691 942 109</li>
            <li>contact.me@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyriht">
        Copyright &copy; 2024 tout droit réservé
      </p>
    </div>
  );
};

export default Footer;
