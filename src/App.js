import { Route, Switch } from "react-router-dom";
import { NavRoutes } from "./routes";
import Header from "./pages/header/Header";

const App = () => {
  return (
    <>
      <Header />
      <div onMouseMove={getTrackerPosition}>
        <Switch>
          {NavRoutes.map(({ id, path, component }) => (
            <Route exact key={id} path={path}>
              {component}
            </Route>
          ))}
        </Switch>
      </div>
    </>
  );
};

export default App;
