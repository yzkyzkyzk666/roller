import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import ScrollToTop from "react-scroll-up"
import { FiChevronUp } from "react-icons/fi"
import Footer from "./components/Footer"
import News from "./pages/News"
import Header from "./components/Header"

let Software
let Consultancy

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/software" component={Software} />
        <Route path="/consultancy" component={Consultancy} />
        <Route path="/news/:id" component={News} />
        <Redirect from="*" to="/" />
      </Switch>

      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
      <Footer />
    </div>
  </BrowserRouter>
)

export default App
