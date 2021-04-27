import React from "react"
import ReactDOM from "react-dom"
import "./assets/scss/main.scss"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import detector from "i18next-browser-languagedetector"
import backend from "i18next-http-backend"
import json5 from "json5"

// i18n
export const languages = [
  ["en", "English"],
  ["cn", "中文"]
]

i18n
  .use(detector)
  .use(backend)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // saveMissing: true, // POST req
    react: {
      // https://stackoverflow.com/questions/54432861/a-react-component-suspended-while-rendering-but-no-fallback-ui-was-specified
      useSuspense: false
    },
    lng: "en",
    fallbackLng: "en",
    ns: ["default", "home"],
    defaultNS: "default",
    interpolation: {
      escapeValue: false
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json5",
      // addPath: "/locales/missing/{{lng}}/{{ns}}", // POST req
      parse(data) {
        return json5.parse(data)
      }
    }
  })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
