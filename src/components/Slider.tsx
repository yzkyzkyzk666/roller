import React from "react"
import styled from "styled-components"

const SingleSlide = styled.div``

const Slider = ({
  title,
  description,
  titleTop,
  minHeight = 900,
  backgroundImage,
  children
}: {
  title?: string
  description?: string
  titleTop?: string
  showServices?: boolean
  minHeight?: number
  backgroundImage?: string
  children?: React.ReactNode
}) => {
  return (
    <div className="pv-slider-area slider-wrapper">
      <div className="slider-activation">
        {/* Start Single Slide */}
        <SingleSlide
          className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image"
          data-black-overlay="7"
          style={{ minHeight, backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="container position-relative">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-left">
                  <span className="theme-gradient font-500">{titleTop}</span>
                  <br />
                  <h1 className="title theme-gradient">{title}</h1>
                  <p className="description">{description}</p>
                </div>
              </div>
            </div>
            {children}
          </div>
        </SingleSlide>
        {/* End Single Slide */}
      </div>
    </div>
  )
}
export default Slider
