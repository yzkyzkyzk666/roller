import { Link, useLocation} from "react-router-dom"
import { ReactComponent as Logo } from "../assets/images/logo/roller-logo.svg"
import { FiMenu, FiX } from "react-icons/fi"
import React, { useState, useEffect } from "react"
import { useTranslation } from "react-i18next"
import styled from "styled-components"
import { FaChevronDown } from "react-icons/fa"
import menu from "../menu"
import { languages } from "../index"

const Li = styled.li`
  cursor: pointer;
`

const Header = () => {
  const [menuVisible,setMenuVisible] = useState(false)
  const [t, i18n] = useTranslation()

  //如果监测到url变化，就把state改为false
  const location = useLocation();

  React.useEffect(() => {
    setMenuVisible(false)
  }, [location]);

  return (
    <header className={`header-area header--transparent formobile-menu header--transparent color--black`}>
      <div className={`header-wrapper ${menuVisible ? 'menu-open' : ''}`} id="header-wrapper">
        <div className="header-left">
          <div className="logo">
            <Link to="/">
              <Logo style={{ height: 50 }} fill="white" />
            </Link>
          </div>
        </div>
        <div className="header-right">
          <nav className="mainmenunav d-lg-block">
            <ul className="mainmenu">
              {menu(t).map(({ to, text }) => (
                <li key={to}>
                  <Link to={to}>{text}</Link>
                </li>
              ))}
              {/* LANGUAGES Menu */}
              <Li class="has-dropdown">
                <a>
                  Language <FaChevronDown style={{ marginLeft: 7 }} />
                </a>
                <ul className="submenu">
                  {languages.map(([lang, name]) => (
                    <li key={lang}>
                      <a onClick={() => i18n.changeLanguage(lang)}>{name}</a>
                    </li>
                  ))}
                </ul>
              </Li>
              {/* END LANGUAGES Menu */}
            </ul>
          </nav>

          <div className="header-btn">
            <Link className="btn-default" to="/contact">
              <span>{t("Contact")}</span>
            </Link>
          </div>
          {/* Start Humberger Menu  */}
          <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
            <span onClick={() => setMenuVisible(true)} className="menutrigger text-white">
              <FiMenu />
            </span>
          </div>
          {/* End Humberger Menu  */}
          <div className="close-menu d-block d-lg-none">
            <span onClick={() => setMenuVisible(false)} className="closeTrigger">
              <FiX />
            </span>
          </div>
        </div>
      </div>
    </header>
  )
}
export default Header
