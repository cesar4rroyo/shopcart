import React, { useState, useEffect } from "react";
import "./styles/Header.css";
import SearchResponsive from "./SearchResponsive";
import { connect } from "react-redux";
import SlideCart from "./SlideCart";
import { Link } from "react-router-dom";

const Header = (props) => {
    const [search, setSearch] = useState(false);
    const [visible, setVisible] = useState(false);
    const handleSearch = () => {
        if (search) {
            setSearch(false);
        } else if (!search) {
            setSearch(true);
        }
    };
    const handleClick = () => {
        if (visible) {
            setVisible(false);
        } else if (!visible) {
            setVisible(true);
        }
    };
    useEffect(() => {
        if (visible) {
            document.body.style.overflow = "hidden";
        } else if (!visible) {
            document.body.style.overflow = "unset";
        }
    });

    const { cartItems } = props;

    return (
        <header>
            <img src="logo192.png" alt="logo" />
            <div className="menu_header">
                <a href="/">
                    <i className="fas fa-bars"></i>
                </a>
                <div className="menu_text">
                    <span>Categorias</span>
                </div>
            </div>
            <ul className="nav__links">
                <li>
                    <div className="search-container">
                        <form action="">
                            <input
                                type="search"
                                placeholder="¿Qué estas buscando?"
                                className="search_header"
                            />
                        </form>
                    </div>
                </li>
                <li>
                    <div className="user_container"

                    >
                        <Link to="/admin">
                            <i className="far fa-user-circle"></i>
                        </Link>
                        <div className="menu_text">
                            <span>Bienvenid@</span>
                        </div>
                    </div>
                </li>
                <li className="cart_li">
                    <i
                        className="fas fa-shopping-cart"
                        onClick={handleClick}
                    ></i>
                    {cartItems.length === 0 ? null : (
                        <span className="total_products">
                            {cartItems.reduce((a, c) => a + c.count, 0)}
                        </span>
                    )}
                </li>
            </ul>
            {search ? (
                <SearchResponsive onClose={handleSearch} />
            ) : (
                    <ul className="responsive_menu">
                        <li>
                            <i onClick={handleSearch} className="fas fa-search"></i>
                        </li>
                        <li>
                            <i className="far fa-user-circle"></i>
                        </li>
                        <li>
                            <i
                                className="fas fa-shopping-cart"
                                onClick={handleClick}
                            ></i>
                            <span className="total_products">
                                {cartItems.length !== 0
                                    ? cartItems.reduce((a, c) => a + c.count, 0)
                                    : null}
                            </span>
                        </li>
                        <li className="menu_responsive_icon">
                            <a href="/">
                                <i className="fas fa-bars"></i>
                            </a>
                        </li>
                    </ul>
                )}
            {visible ? (
                <SlideCart
                    createOrder={props.createOrder}
                    isVisibe={visible}
                    onClose={handleClick}
                />
            ) : null}
        </header>
    );
};
const mapStateToProps = (state) => ({
    cartItems: state.cart.cartItems,
});
export default connect(mapStateToProps)(Header);
