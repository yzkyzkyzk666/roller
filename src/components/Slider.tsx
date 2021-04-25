import React from "react"
import { FiActivity, FiCast, FiMap } from "react-icons/fi"
import styled from "styled-components"

const SingleSlide = styled.div``

const ServiceList = [
  {
    icon: <FiActivity />,
    title: "Modern technologies",
    description: "We use latest technologies to deliver industrial grade products"
  },
  {
    icon: <FiCast />,
    title: "Comprehensive team",
    description: "Team of experts from different areas including corporate finance, logistics and management"
  },
  {
    icon: <FiMap />,
    title: "Result-driven",
    description: "We care for our deliverables anmd clients, that means we deliver timely updates with quality"
  }
]

const Slider = ({
  title,
  showServices,
  minHeight = 900
}: {
  title?: string
  showServices?: boolean
  minHeight?: number
}) => (
  <>
    {/* Start Slider Area   */}
    <div className="pv-slider-area slider-wrapper">
      <div className="slider-activation">
        {/* Start Single Slide */}
        <SingleSlide
          className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--34"
          data-black-overlay="9"
          style={{ minHeight }}
        >
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner">
                  {/*<span>We are...</span>*/}
                  <h1 className="title theme-gradient">{title}</h1>
                </div>
              </div>
            </div>

            {/* Start Service Area */}
            {showServices && (
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
            )}
            {/* End Service Area */}
          </div>
        </SingleSlide>
        {/* End Single Slide */}
      </div>
    </div>
    {/* End Slider Area   */}
  </>
)
export default Slider
