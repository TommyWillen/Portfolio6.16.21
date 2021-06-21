import {BrowserRouter, Route, Switch} from "react-router-dom"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Portfolio from "./pages/Portfolio"
import NavBar from "./components/NavBar"
import Home from "./pages/Home"

const App = () => {
  return (
    <BrowserRouter>
    <NavBar />
    <Switch>
      <Route component={Home} path="/" exact />
      <Route component={About} path="/aboutme" />
      <Route component={Contact} path="/contactme" />
      <Route component={Portfolio} path="/portfolio" />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
