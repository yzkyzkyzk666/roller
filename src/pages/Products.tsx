import React from "react"
import SliderBreadcrumb from "../components/SliderBreadcrumb"
import { useTranslation } from "react-i18next"

const Products = () => {
  const [t] = useTranslation()
  return (
    <>
      <SliderBreadcrumb
        title={t("Products")}
        breadcrumb={[
          { to: "/", text: t("Home") },
          {
            text: t("Products")
          }
        ]}
      />
    </>
  )
}

export default Products
