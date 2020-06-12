import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BolsaCompra from "./components/BolsaCompra";
import AdminSection from "./components/AdminSection";
import LogIn from "./components/LogIn";
import { ProtectedRoute } from "./auth/Protected";

const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <ProtectedRoute
                        exact
                        path="/admin"
                        component={AdminSection}
                    ></ProtectedRoute>
                    <Route exact path="/login" component={LogIn}></Route>
                    <Route exact path="/compra" component={BolsaCompra}></Route>
                    <Route
                        path="*"
                        component={() => "404 NOT FOUND PAGE"}
                    ></Route>
                </Switch>
            </Provider>
        </Router>
    );
};

export default App;
