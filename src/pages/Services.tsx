import React from "react"
import SliderBreadcrumb from "../components/SliderBreadcrumb"
import { useTranslation } from "react-i18next"

const Services = () => {
  const [t] = useTranslation()
  return (
    <>
      <SliderBreadcrumb
        title={t("Services")}
        breadcrumb={[
          { to: "/", text: t("Home") },
          {
            text: t("Services")
          }
        ]}
      />
    </>
  )
}

export default Services
