import './App.css';
import React from "react"
import {Route} from "react-router-dom";
import LandingPage from "./components/landingPage/index";
import NavBar from "./components/navBar/index";
import countryDetails from "./components/countryDetails/index";
import createActivity from "./components/createActivity/index";
import Filters from './components/Filters/index.jsx';
import Home from './components/home/index';
import Activities from "./components/activities/index.jsx"

const App = () => {
  return (
    <>
      <Route path="/countries" component={NavBar} />
      <Route exact path="/countries">
        <Filters />
        <Home/>
      </Route>
      <Route exact path="/countries/:id" component={countryDetails} />
      <Route exact path="/activities" component={createActivity} />
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/activities/all" component={Activities} />
    </>
  )
}

export default App
