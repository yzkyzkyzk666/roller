import React from "react"
import SliderBreadcrumb from "../components/SliderBreadcrumb"
import { useTranslation } from "react-i18next"

const People = () => {
  const [t, i18n] = useTranslation()

  return (
    <>
      <SliderBreadcrumb
        title={t("People")}
        breadcrumb={[
          { to: "/", text: t("Home") },
          {
            text: t("People")
          }
        ]}
      />
    </>
  )
}

export default People
