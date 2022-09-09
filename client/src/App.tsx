import React from "react";
import {Route, Switch} from 'react-router-dom'
import "./App.css";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";

function App() {

  return (
    <>
    <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/detail" component={DetailPage} />
    </Switch>
    </>
  );
}

export default App;
