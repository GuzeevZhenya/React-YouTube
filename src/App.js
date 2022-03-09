import "./App.css";
import { Registration } from "./Components/Registration/Registration";

import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import { FavouritePages } from "./pages/Favourite";
import { RegistrationPages } from "./pages/Registration";
import { MainPages } from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <Switch>
          <Route exact path="/">
            <MainPages />
          </Route>
            <Route path="/Favourite" exact component={FavouritePages} />
            <Route path="/Registration" exact component={RegistrationPages} />
            <Route path="/Main" exact component={MainPages} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
