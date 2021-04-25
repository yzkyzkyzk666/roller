import React from "react"
import { FaReact, FaSass } from "react-icons/fa"
import { FiCode, FiSmartphone } from "react-icons/fi"
import Slider from "../components/Slider"
import About from "../components/About"

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

const OurProducts = () => (
  <div id="feature" className="service-area bg_color--1 ptb--120 active-dark">
    <div className="wrapper plr--120">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title text-center pb--30">
            <span className="subtitle">Software as a Service</span>
            <h2 className="title">Our products</h2>
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

const Home = () => {
  return (
    // <div className="active-dark">
    <div className="">
      <Slider title="Business cloud / web solutions consultants" showServices />

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
    </div>
  )
}

export default Home
