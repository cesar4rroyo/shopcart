import React, { Component } from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";
import CartItem from "./CartItem";
import Proceed from "./Proceed";
import FormOrder from "./FormOrder";
import {
    removeFromCart,
    decreaseProducts,
    addToCart,
} from "../actions/cartActions";
import "./styles/carts.css";

class Cart extends Component {
    state = { showCheckOut: false, name: "", email: "", address: "", total: 0 };
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
        // console.log(cartItems);

        const proceedFx = () => {
            this.setState({
                showCheckOut: true,
            });
        };
        return (
            <div>
                {cartItems.length === 0 ? (
                    <div className="cart cart-header">
                        No tienes ningun producto
                    </div>
                ) : (
                    <div className="cart cart-header">
                        Tienes {cartItems.length} productos seleccionados
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
                                            addToCart={() =>
                                                this.props.addToCart(item)
                                            }
                                            removeClick={() =>
                                                this.props.removeFromCart(item)
                                            }
                                            decreaseProduct={() =>
                                                this.props.decreaseProducts(
                                                    item
                                                )
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
                                proceedBtn={proceedFx}
                                onClose={this.props.onClose}
                            >
                                <span>
                                    {cartItems.reduce(
                                        (a, c) => a + c.price * c.count,
                                        0
                                    )}
                                </span>
                            </Proceed>
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

const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps, {
    removeFromCart,
    decreaseProducts,
    addToCart,
})(Cart);
