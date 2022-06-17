import "./styles/App.css";
import { Switch, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from './components/about/About';
import Home from "./routes/home/Home";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact"

function App() {
  return (
    
      <div className="app">
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/work">
            <Work />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        
        <Footer />
      </div>
  );
}

export default App;
