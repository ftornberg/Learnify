import React from "react";
import {Route, Switch} from 'react-router-dom'
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import Navigation from "./component/Navigation";

function App() {

  return (
    <>
    <Navigation />
    <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/detail" component={DetailPage} />
    </Switch>
    </>
  );
}

export default App;
