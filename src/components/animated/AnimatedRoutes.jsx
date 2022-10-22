import React from 'react';
import { Route, Switch, useLocation } from "react-router-dom"
import Home from '../../routes/home/Home';
import About from '../about/About';
import Work from "../work/Work"
import Contact from '../contact/Contact';
import { AnimatePresence } from "framer-motion"

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Switch location={location} key={location.pathname}>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/about"> <About /> </Route>
        <Route path="/work"> <Work /> </Route>
        <Route path="/contact"> <Contact /> </Route>
      </Switch>
    </AnimatePresence>

  )
}

export default AnimatedRoutes