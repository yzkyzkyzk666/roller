import React from "react"
import { Link } from "react-router-dom"
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { DateTime } from "luxon"
import { ReactComponent as Logo } from "../assets/images/logo/roller-logo.svg"
import { useTranslation } from "react-i18next"
import menu from "../menu"

const socials = [
  { Social: <FaFacebookF />, link: "https://www.facebook.com/" },
  { Social: <FaLinkedinIn />, link: "https://www.linkedin.com/" },
  { Social: <FaInstagram />, link: "https://www.instagram.com/" },
  { Social: <FaTwitter />, link: "https://twitter.com/" }
]

const Footer = () => {
  const [t, i18n] = useTranslation()

  return (
    <footer className="footer-area footer-style-01 bg_color--6">
      {/* Start Call to Action Area  */}
      <div className="im-call-to-action-area ptb--70 im-separator">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-xl-6 col-md-12 col-sm-12 col-12">
              <div className="inner">
                <h2 className="text-white mb--0">{t("Enough Talk, Lets Build Something Together")}</h2>
              </div>
            </div>
            <div className="col-lg-4 col-xl-4 offset-xl-2 col-md-12 col-sm-12 col-12">
              <div className="call-to-cation-tbn text-left text-lg-right mt_md--20 mt_sm--20">
                <div className="footer-btn mt--35">
                  <Link className="btn-default" to="/contact">
                    <span>{t("Get in contact")}</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Call to Action Area  */}

      {/* Start Footer Area  */}
      <div className="footer-wrapper ptb--70">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 col-12">
              <div className="ft-text">
                <Link to="/">
                  <Logo style={{ height: 50 }} fill="white" />
                </Link>
                <p>
                  © {DateTime.now().year} Roller Pty Ltd
                  <br />
                  Sydney, Australia
                  <br />
                  ACN 642 555 020
                </p>
              </div>
            </div>
            {/* Start Single Widget  */}
            <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
              <div className="footer-link">
                <h4>{t("Quick Link")}</h4>
                <ul className="ft-link">
                  {menu(t).map(({ to, text }) => (
                    <li key={to}>
                      <Link to={to}>{text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* End Single Widget  */}

            {/* Start Single Widget  */}
            <div className="col-lg-2 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
              <div className="footer-link">
                <h4>{t("Quick Link")}</h4>
                <ul className="ft-link">
                  {menu(t).map(({ to, text }) => (
                    <li key={to}>
                      <Link to={to}>{text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* End Single Widget  */}

            {/* Start Single Widget  */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
              <div className="footer-link">
                <h4>{t("Say Hello")}</h4>
                <ul className="ft-link">
                  <li>
                    Email: <a href="mailto:enquiry@rollersoft.com.au">enquiry@rollersoft.com.au</a>
                  </li>
                  <li>
                    {t("Phone")}: <a href="tel:+61403666639">+61 403 666 639</a>
                  </li>
                </ul>

                <div className="social-share-inner mt--20">
                  <ul className="social-share social-style--2 d-flex justify-content-start liststyle">
                    {socials.map((val, i) => (
                      <li key={i}>
                        <a href={`${val.link}`}>{val.Social}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* End Single Widget  */}
          </div>
        </div>
      </div>
      {/* End Footer Area  */}
    </footer>
  )
}

export default Footer
