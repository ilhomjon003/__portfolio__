import Contact from "../pages/contact/Contact";
import About from "../pages/about/About";
import Work from "../pages/work/index";
import Home from "../pages/home/Home";

export const NavRoutes = [
  {
    id: 0,
    title: "About",
    path: "/about",
    component: <About />,
  },
  {
    id: 1,
    title: "Work",
    path: "/work",
    component: <Work />,
  },
  {
    id: 2,
    title: "Skills",
    path: "/skills",
  },
  {
    id: 3,
    title: "Contact",
    path: "/contact",
    component: <Contact />,
  },
  {
    id: 4,
    path: "/",
    component: <Home />,
  }
];
