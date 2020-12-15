import React from "react";
import { Route, Switch } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import HomePage from "../pages/HomePage";

const Page = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/admin" component={AdminPage} />
      </Switch>
    </>
  );
};

export default Page;
