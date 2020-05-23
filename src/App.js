import React, { Component } from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store";
import { Provider } from "react-redux";
import Header from "./components/Header";

class App extends Component {
    createOrder = (order) => {
        console.log(order);
    };
    render() {
        return (
            <Provider store={store}>
                <div className="grid-container">
                    <Header />
                    <div className="container_img_hero">
                        <img
                            className="img_hero"
                            src="images/hero.jpg"
                            alt="hero"
                        />
                    </div>
                    <Filter />
                    <main>
                        <div className="content">
                            <div className="main">
                                <Products />
                            </div>
                            <div className="sidebar">
                                <Cart createOrder={this.createOrder} />
                            </div>
                        </div>
                    </main>
                    <footer>All rigth is reserved.</footer>
                </div>
            </Provider>
        );
    }
}

export default App;
