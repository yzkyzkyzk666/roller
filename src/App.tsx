import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import Home from "./pages/Home"
import ScrollToTop from "react-scroll-up"
import { FiChevronUp } from "react-icons/fi"
import Footer from "./components/Footer"
import BlogSingle from "./pages/blog/BlogSingle"
import BlogList from "./pages/blog/BlogList"
import Header from "./components/Header"
import People from "./pages/People"
import Services from "./pages/Services"
import Products from "./pages/Products"
import Contact from "./pages/Contact"

const App = () => (
  <div className="App">
    <BrowserRouter>
      <Header />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/services" component={Services} />
        <Route path="/people" component={People} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog/:id" component={BlogSingle} />
        <Route path="/blog" component={BlogList} />
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
    </BrowserRouter>
  </div>
)

export default App
