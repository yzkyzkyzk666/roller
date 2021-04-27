import React from "react"
import { FaReact, FaSass } from "react-icons/fa"
import { FiActivity, FiCast, FiCode, FiMap, FiSend, FiSmartphone } from "react-icons/fi"
import Slider from "../components/Slider"
import HomeBg from "../assets/images/bg/home-2.jpg"
import { useTranslation } from "react-i18next"
import { Section } from "../components/styled/layouts"
import AboutBlock from "../assets/images/home-about.jpg"
import { Link } from "react-router-dom"

const featureList = [
  {
    icon: <FaReact />,
    title: "Yaso",
    subtitle: "Currency Exchange Management with multi-store, access control, double-entry ledgers, rate management"
  },
  {
    icon: <FiSmartphone />,
    title: "Irvon",
    subtitle: "Student application tracking software"
  },
  {
    icon: <FiCode />,
    title: "Yaso",
    subtitle: "Currency Exchange Management with multi-store, access control, double-entry ledgers, rate management"
  },
  {
    icon: <FaSass />,
    title: "Irvon",
    subtitle: "Student application tracking software"
  }
]

const OurProducts = () => {
  const [t] = useTranslation()
  return (
    <div id="feature" className="service-area bg_color--1 ptb--120 active-dark">
      <div className="wrapper plr--120">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center pb--30">
              <span className="subtitle">{t("home:Our products")}</span>
              <h2 className="title">{t("home:Software as a Service")}</h2>
            </div>
          </div>
        </div>
        <div className="row service-main-wrapper">
          {/* Start Single Feature  */}
          {featureList.map((value, i) => (
            <div className="col-lg-6 col-xl-3 col-md-6 col-sm-6 col-12" key={i}>
              <div className="service service__style--2 text-left">
                <div className="icon">{value.icon}</div>
                <div className="content">
                  <h3 className="title">{value.title}</h3>
                  <p className="subtitle">{value.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
          {/* End Single Feature  */}
        </div>
      </div>
    </div>
  )
}

const About = () => {
  const { t } = useTranslation()

  const title = t("Refreshingly Unique Company About."),
    description =
      "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.",
    description2 =
      "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences"

  return (
    <Section className="about-wrapper rm-about-style-2">
      <div className="container">
        <div className="row row--35 align-items-center">
          <div className="col-lg-5 col-md-12">
            <div className="thumbnail">
              <img className="w-100" src={AboutBlock} alt="About Images" />
            </div>
          </div>
          <div className="col-lg-7 col-md-12">
            <div className="about-inner inner">
              <div className="section-title">
                <div className="icon">
                  <FiSend />
                </div>
                <h2 className="title">{title}</h2>
                <p className="description">{description}</p>
                <p className="description">{description2}</p>
                <div className="purchase-btn">
                  <Link className="btn-transparent" to="/">
                    Get in contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

const Home = () => {
  const [t, i18n] = useTranslation()

  const title = t("home:sliderTitle")
  const titleTop = t("home:sliderTitleTop")
  const ServiceList = [
    {
      icon: <FiActivity />,
      title: t("home:Modern technologies"),
      description: t("home:We use latest technologies to deliver industrial grade products")
    },
    {
      icon: <FiCast />,
      title: t("home:Comprehensive team"),
      description: t("home:Team of experts from different areas including corporate finance, logistics and management")
    },
    {
      icon: <FiMap />,
      title: t("home:Result driven"),
      description: t("home:We care for our deliverables and clients, that means we deliver timely updates with quality")
    }
  ]

  return (
    // <div className="active-dark">
    <>
      <Slider title={title} titleTop={titleTop} showServices backgroundImage={HomeBg}>
        {/* Start Service Area */}
        <div className="service-wrapper service-white">
          <div className="row row--25">
            {ServiceList.map((val, i) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                <div className="service service__style--1">
                  <div className="icon">{val.icon}</div>
                  <div className="content">
                    <h4 className="title">{val.title}</h4>
                    <p>{val.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* End Service Area */}
      </Slider>

      {/* End Banner Area  */}

      {/* Start Preview Main Wrapper */}
      <div className="main-wrapper">
        {/* Start Feature Area  */}
        <About />
        <OurProducts />

        {/* Start Faq Area */}
        {/*<div id="faq" className="pv-feaq-area bg_color--5 ptb--120">*/}
        {/*  <div className="container">*/}
        {/*    <div className="row">*/}
        {/*      <div className="col-lg-8 offset-lg-2">*/}
        {/*        <div className="section-title text-left pb--30">*/}
        {/*          <span className="subtitle theme-gradient">Check out our FAQ section to see if we can help.</span>*/}
        {/*          <h2 className="title">Do you have any Question</h2>*/}
        {/*        </div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*    <div className="row">*/}
        {/*      <div className="col-lg-8 offset-lg-2">*/}
        {/*        <div className="faq-area"></div>*/}
        {/*      </div>*/}
        {/*    </div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/* Start Faq Area */}
      </div>
    </>
  )
}

export default Home
