import React from "react";
import store from "./store";
import { Provider } from "react-redux";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BolsaCompra from "./components/BolsaCompra";

const App = () => {
    return (
        <Router>
            <Provider store={store}>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/compra" component={BolsaCompra}></Route>
                </Switch>
            </Provider>
        </Router>
    );
};

export default App;
