import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
