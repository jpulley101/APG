import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaChevronCircleUp
} from "react-icons/lib/fa";

const Footer = () => (
  <footer id="footer">
    <div className="row">
      <div className="twelve columns">
        <ul className="social-links">
          <li>
            <a href="#">
              <FaFacebook />
            </a>
          </li>
          <li>
            <a href="#">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href="#">
              <FaGithub />
            </a>
          </li>
          <li>
            <a href="#">
              <FaGithub />
            </a>
          </li>
        </ul>

        <ul className="copyright">
          <li>&copy; Copyright 2018 Anchor Production Group</li>
          <li>
            Developed in React by &nbsp;
            <a>Jarrett Pulley</a>
          </li>
        </ul>
      </div>

      <div id="go-top">
        <a className="smoothscroll" title="Back to Top" href="#home">
          <FaChevronCircleUp />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
