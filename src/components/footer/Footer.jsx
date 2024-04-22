import React from "react";
import "./footer.css";
import { CiInstagram } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Midias sociais </h1>
        <span className="section__subtitle"></span>
        {/*    <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              Sobre
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projects
            </a>
          </li>

          <li>
            <a href="#testimonials" className="footer__link">
              Testimonials
            </a>
          </li>
        </ul> */}

        <div className="footer__social">
          <a
            href="https://www.instagram.com/oleandrofelix/"
            className="footer__social-link"
            target="_blank"
          >
            <CiInstagram />
            <i className="bx bxl-facebook"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/leandro-galdino-felix/"
            className="footer__social-link"
            target="_blank"
          >
            <CiLinkedin />
            <i className="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.youtube.com/channel/UCUuNfXl_M98_BAu-82HYsgg"
            className="footer__social-link"
            target="_blank"
          >
            <CiYoutube />
            <i className="bx bxl-twitter"></i>
          </a>
        </div>

        <span className="footer__copy">
          Todos direitos reservados.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
