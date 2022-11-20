import { Route, Switch } from "react-router-dom";
import { NavRoutes } from "./routes";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        {NavRoutes.map(({ id, path, component }) => (
          <Route exact key={id} path={path}>
            {component}
          </Route>
        ))}
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
