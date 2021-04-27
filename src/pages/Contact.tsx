import React, { useState } from "react"
import SliderBreadcrumb from "../components/SliderBreadcrumb"
import { useTranslation } from "react-i18next"
import { Section } from "../components/styled/layouts"
import ContactImg from "../assets/images/contact.jpg"

const Contact = () => {
  const [t, i18n] = useTranslation()

  const [state, setStateDull] = useState({
    Name: "",
    Email: "",
    Subject: "",
    Message: ""
  })

  const setState = (s) => setStateDull({ ...state, ...s })

  return (
    <>
      <SliderBreadcrumb
        title={t("Contact")}
        breadcrumb={[
          { to: "/", text: t("Home") },
          {
            text: t("Contact")
          }
        ]}
      />
      <Section className="contact-form--1">
        <div className="container">
          <div className="row row--35 align-items-start">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="section-title text-left mb--50">
                <span className="subtitle">{t("Lets Say Hi")}</span>
                <h2 className="title">{t("Find Us.")}</h2>
                <div className="im_address_inner">
                  <div className="im_address">
                    <span>{t("Call us directly:")}</span>
                    <a className="link im-hover" href="tel:+61 403 666 639">
                      +61 403 666 639
                    </a>
                  </div>
                  <div className="im_address mt--5">
                    <span>{t("Contact Email:")}</span>
                    <a className="link im-hover" href="mailto:enquiry@rollersoft.com.au">
                      enquiry@rollersoft.com.au
                    </a>
                  </div>
                </div>
              </div>
              <div className="form-wrapper">
                <form>
                  <label htmlFor="item01">
                    <input
                      type="text"
                      name="name"
                      value={state.Name}
                      onChange={(e) => {
                        setState({ Name: e.target.value })
                      }}
                      placeholder="Your Name *"
                    />
                  </label>

                  <label htmlFor="item02">
                    <input
                      type="text"
                      name="email"
                      value={state.Email}
                      onChange={(e) => {
                        setState({ Email: e.target.value })
                      }}
                      placeholder="Your email *"
                    />
                  </label>

                  <label htmlFor="item03">
                    <input
                      type="text"
                      name="subject"
                      value={state.Subject}
                      onChange={(e) => {
                        setState({ Subject: e.target.value })
                      }}
                      placeholder="Write a Subject"
                    />
                  </label>
                  <label htmlFor="item04">
                    <textarea
                      name="message"
                      value={state.Message}
                      onChange={(e) => {
                        setState({ Message: e.target.value })
                      }}
                      placeholder="Your Message"
                    />
                  </label>
                  <button className="btn-default" type="submit" value="submit" name="submit" id="mc-embedded-subscribe">
                    {t("Submit Now")}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail mb_md--30 mb_sm--30">
                <img src={ContactImg} alt="contact" />
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  )
}

export default Contact
