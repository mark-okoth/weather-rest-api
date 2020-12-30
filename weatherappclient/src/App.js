import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Post from "./components/postform";
import { link, Redirect, Route, Switch} from "react-router-dom";
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
      </Switch>
    </div>
  );
}

export default App;
