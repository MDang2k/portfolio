import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import LogoS from "../../assets/images/logo-s_high.png"

import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBriefcase, faEnvelope, faHome, faUser } from "@fortawesome/free-solid-svg-icons"
import { faFacebook, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Sidebar() {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>

      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="about-link"
          to="/about"
        >
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="works-link"
          to="/works"
        >
          <FontAwesomeIcon icon={faBriefcase} color="#4d4d4e" />
        </NavLink>

        <NavLink
          exact="true"
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/%C4%91%C4%83ng-minh-9b572a249/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a target="_blank" rel="noreferrer" href="https://github.com/MDang2k">
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>

        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.facebook.com/minhdang.doan.10/"
          >
            <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}
