import React, { Component } from "react";
import { clearOrder, createOrder } from "../actions/orderActions";
import { connect } from "react-redux";
import ModalOrder from "./ModalOrder";
import { Redirect } from "react-router-dom";

class FormOrder extends Component {
    state = { name: "", email: "", address: "", redirect: false };
    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems,
            total: this.props.cartItems.reduce(
                (a, c) => a + c.price * c.count,
                0
            ),
        };
        this.props.createOrder(order);
    };
    closeModal = () => {
        this.props.clearOrder();
        this.setState({ redirect: true });
    };
    render() {
        const cartItems = this.props.cartItems;
        const order = this.props.order;
        if (this.state.redirect) {
            return <Redirect to="/"></Redirect>;
        }

        return (
            <div className="form_container">
                {order && (
                    <ModalOrder
                        cartItems={cartItems}
                        order={order}
                        onClose={this.closeModal}
                    />
                )}
                <form onSubmit={this.createOrder}>
                    <ul className="form-container">
                        <li>
                            <label htmlFor="email">Email</label>
                            <input
                                name="email"
                                type="email"
                                required
                                onChange={this.handleInput}
                            />
                        </li>
                        <li>
                            <label htmlFor="name">Name</label>
                            <input
                                name="name"
                                type="text"
                                required
                                onChange={this.handleInput}
                            />
                        </li>
                        <li>
                            <label htmlFor="address">Address</label>
                            <input
                                name="address"
                                type="text"
                                required
                                onChange={this.handleInput}
                            />
                        </li>
                        <li>
                            <button className="checkout_btn" type="submit">
                                Checkout
                            </button>
                        </li>
                    </ul>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    order: state.order.order,
    cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, {
    clearOrder,
    createOrder,
})(FormOrder);
