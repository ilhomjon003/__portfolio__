import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import { NavRoutes } from "./routes";
import Header from "./pages/header/Header";


const App = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const getTrackerPosition = e => {
    setX(e.clientX);
    setY(e.clientY);
  }

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
      <div className="tracker" style={{ top: `${y}px`, left: `${x}px` }} ></div><div className="dot" style={{ top: `${y}px`, left: `${x}px` }} ></div>
    </>
  );
};

export default App;
