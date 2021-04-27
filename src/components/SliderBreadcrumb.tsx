import React from "react"
import { Link } from "react-router-dom"

/*
  To be used as a simple, lightweight alternative to big slide heroes like `Home`
*/

const SliderBreadcrumb = ({ title, breadcrumb = [] }: { title?; breadcrumb? }) => (
  <div className="breadcrumb-area rn-bg-color ptb--120 bg_image bg_image--1">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb-inner pt--100">
            <h2 className="title">{title}</h2>
            <ul className="page-list">
              {breadcrumb.map(({ text, to }, i) => (
                <li className={`rn-breadcrumb-item ${i + 1 === breadcrumb.length ? "active" : ""}`} key={text}>
                  {to ? <Link to={to}>{text}</Link> : text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)
export default SliderBreadcrumb
