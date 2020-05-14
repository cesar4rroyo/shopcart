import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import CartItem from "./CartItem";
import Proceed from "./Proceed";
import FormOrder from "./FormOrder";

export default class Cart extends Component {
    state = { showCheckOut: false, name: "", email: "", address: "" };
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
        };
        this.props.createOrder(order);
    };
    render() {
        const { cartItems } = this.props;
        const reduceFx = () => {
            cartItems.reduce((a, c) => a + c.price * c.count, 0);
        };
        const proceedFx = () => {
            this.setState({
                showCheckOut: true,
            });
        };
        return (
            <div>
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">Cart is empty</div>
                ) : (
                    <div className="cart cart-header">
                        You have {cartItems.length} in the cart
                    </div>
                )}
                <div>
                    <div className="cart">
                        <Fade left cascade>
                            <ul className="cart-items">
                                {cartItems.map((item) => (
                                    <li key={item._id}>
                                        <CartItem
                                            image={item.image}
                                            title={item.title}
                                            price={item.price}
                                            count={item.count}
                                            removeClick={() =>
                                                this.props.removeFromCart(item)
                                            }
                                        />
                                    </li>
                                ))}
                            </ul>
                        </Fade>
                    </div>
                    {cartItems.length !== 0 && (
                        <div>
                            <Proceed
                                reduceFx={reduceFx}
                                proceedBtn={proceedFx}
                            />
                            {this.state.showCheckOut && (
                                <Fade right cascade>
                                    <FormOrder
                                        submitFx={this.createOrder}
                                        onChangeFx={this.handleInput}
                                    />
                                </Fade>
                            )}
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
