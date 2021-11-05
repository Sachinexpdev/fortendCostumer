import "./App.css";
import Home from "./views/pages/Home";
import Login from "./views/pages/Login";
import SignUp from "./views/pages/SignUp";
import Profile from "./views/pages/Profile";
import PlanAndPackages from "./views/pages/PlanAndPackages";
import Schedule from "./views/pages/Schedule";
import History from "./views/pages/History";
import Dashboard from "./views/pages/Dashboard";
import Explore from "./views/pages/Explore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {createStore, combineReducers} from 'redux'
import {Provider}  from 'react-redux'
import ReduxToastr, { toastr } from 'react-redux-toastr'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import {reducer as toastrReducer} from 'react-redux-toastr'
import 'react-confirm-alert/src/react-confirm-alert.css';                  


const reducers = {
  // ... other reducers ...
  toastr: toastrReducer // <- Mounted at toastr.
}
const reducer = combineReducers(reducers)
const store = createStore(reducer)


function App() {
  return (
    <>
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home" exact>
            <Home />
          </Route>

          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/Schedule" exact>
            <Schedule />
          </Route>
          <Route path="/PlanAndPackages" exact>
            <PlanAndPackages />
          </Route>
          <Route path="/explore" exact>
            <Explore />
          </Route>

          <Route path="/History" exact>
            <History />
          </Route>
          <Route path="/auth/sign-in" exact>
            <Login />
          </Route>
          <Route path="/" exact>
            <SignUp />
          </Route>
        </Switch>
      </Router>
      <Provider store = { store }>
      <div>
    {/* ... other things like router ...
    // props are not required */}
    <ReduxToastr
     
      timeOut={5000}
      newestOnTop={false}
      preventDuplicates
      position="top-center"
      getState={(state) => state.toastr} // This is the default
      transitionIn="fadeIn"
      transitionOut="fadeOut"
      progressBar
      closeOnToastrClick/>
  </div>
  </Provider>
    </div>
</>    
    
  );
}


export default App;
// :level?/:age?/:gender?