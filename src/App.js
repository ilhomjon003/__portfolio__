import "./styles/App.css";
// import { Router } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import AnimatedRoutes from "./components/animated/AnimatedRoutes";

function App() {
  return (
    <>
        <Header />
        <AnimatedRoutes />
        <Footer />
    </>
  );
}

export default App;
