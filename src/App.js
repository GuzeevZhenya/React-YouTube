import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { FavouritePages } from './pages/Favourite';
import { RegistrationPages } from './pages/Registration';
import { MainPages } from './pages/Main';
import NotFound from './pages/NotFound';

function App() {
  const dispatch = useDispatch();
  const registrationReducer = useSelector((state) => state.registationReducer);

  const RouteInfo = (
    <Switch>
      <Route exact path="/">
        <MainPages />
      </Route>
      <Route path="/Favourite" exact component={FavouritePages} />
      <Route path="/Registration" component={RegistrationPages} />
      <Route path="/Main" component={MainPages} />
      <Route component={NotFound} />
    </Switch>
  );

  return (
    <BrowserRouter>
      <div className="App"> 
        {registrationReducer.exces ? <div>{RouteInfo}</div> : <RegistrationPages />}
      </div>
    </BrowserRouter>
  );
}

export default App;
