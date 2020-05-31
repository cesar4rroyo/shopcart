import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import BolsaCompra from "./components/BolsaCompra";

function Rutas() {
    return (
        <Router>
            {/* <Switch>
                <Route exact path="/" component={App}></Route>
                <Route exact path="/compra" component={BolsaCompra}></Route>
            </Switch> */}
        </Router>
    );
}
export default Rutas;
