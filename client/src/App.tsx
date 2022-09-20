import React from "react";
import {Route, Switch} from 'react-router-dom'
import "./sass/main.scss";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import DetailPage from "./pages/DetailPage";
import Navigation from "./component/Navigation";
import "antd/dist/antd.min.css"
import Categories from "./component/Categories";

function App() {

  return (
    <>
    <Navigation />
    <Route exact path="/" component={Categories }/>
    <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/detail" component={DetailPage} />
    </Switch>
    </>
  );
}

export default App;
