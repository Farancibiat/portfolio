import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import NavigationBar from "./component/navigationBar";
import SideBar from "./component/sideBar";
import Home from "./component/home";
import injectContext from "./store/appContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop>
        <NavigationBar />
		<div className="container">
        <div className="row">
          <div className="col-12 col-sm-4">
            <SideBar />
          </div>
          <div className="col-12 col-sm-8 p-0">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </div>
		</div>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default injectContext(Layout);
