import { useEffect, useState } from "react";
import Router from "./router/Router";
import { getRoutes } from "./router/routes";

function App() {
  const [allRoutes, setAllRoutes] = useState([]);
console.log(allRoutes)
  useEffect(() => {
    const routes = getRoutes();
    // console.log("route",routes)
    setAllRoutes([...allRoutes, routes]);
  }, []);

  return <Router allRoutes={allRoutes} />;
}
export default App;
