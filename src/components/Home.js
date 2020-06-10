import React, { Component } from "react";
import Products from "./Products";
import Filter from "./Filter";
import Header from "./Header";
import { connect } from "react-redux";

class Home extends Component {
    state = { reload: false };
    createOrder = (order) => {
        console.log(order);
    };

    render() {
        return (
            <div className="grid-container">
                <Header createOrder={this.createOrder} />
                <div className="container_img_hero">
                    <img
                        className="img_hero"
                        src="images/hero.jpg"
                        alt="hero"
                    />
                </div>
                <Filter />
                <main>
                    <div className="container">
                        <Products />
                    </div>
                </main>
                <footer>All rigth is reserved.</footer>
            </div>
        );
    }
}
const mapStateToProps = (state) => ({
    order: state.order.order,
});
export default connect(mapStateToProps)(Home);
