import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { FavouritePages } from './pages/Favourite';
import { RegistrationPages } from './pages/Registration';
import { MainPages } from './pages/Main';

function App() {
  const dispatch = useDispatch();
  const registrationReducer = useSelector((state) => state.registationReducer);
  
  const RouteInfo = (
      <Switch>
        <Route exact path="/">
          <MainPages />
        </Route>
        <Route path="/Favourite" exact component={FavouritePages} />
        <Route path="/Registration" exact component={RegistrationPages} />
        <Route path="/Main" exact component={MainPages} />
      </Switch>
     
  );

  return (
    <BrowserRouter>
      <div className="App">

          {registrationReducer.exces ? <div>{ RouteInfo }</div> : <RegistrationPages />}
         
      </div>
    </BrowserRouter>
  );
}

export default App;
