import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
