import { Link } from "react-router-dom"
import { ReactComponent as Logo } from "../assets/images/logo/roller-logo.svg"
import { FiMenu, FiX } from "react-icons/fi"
import React from "react"

const openMenu = () => {
  return
}
const closeMenu = () => {
  return
}

const Header = () => (
  <header className={`header-area header--transparent formobile-menu header--transparent color--black`}>
    <div className="header-wrapper" id="header-wrapper">
      <div className="header-left">
        <div className="logo">
          <Link to="/">
            <Logo style={{ height: 50 }} />
          </Link>
        </div>
      </div>
      <div className="header-right">
        <nav className="mainmenunav d-lg-block">
          <ul className="mainmenu">
            <li>
              <Link to="/software">Software</Link>
            </li>
            <li>
              <Link to="/consultancy">Consultancy</Link>
            </li>
          </ul>
        </nav>

        <div className="header-btn">
          <Link className="btn-default" to="https://themeforest.net/checkout/from_item/31405042?license=regular">
            <span>Contact</span>
          </Link>
        </div>
        {/* Start Humberger Menu  */}
        <div className="humberger-menu d-block d-lg-none pl--20 pl_sm--10">
          <span onClick={openMenu} className="menutrigger text-white">
            <FiMenu />
          </span>
        </div>
        {/* End Humberger Menu  */}
        <div className="close-menu d-block d-lg-none">
          <span onClick={closeMenu} className="closeTrigger">
            <FiX />
          </span>
        </div>
      </div>
    </div>
  </header>
)
export default Header
