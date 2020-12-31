import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Post from "./components/postform";
import Singles from './components/singleweather'
import { Route, Switch } from "react-router-dom";
function App(props) {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/create">
          <Post />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/home/:id" >
          <Singles/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
