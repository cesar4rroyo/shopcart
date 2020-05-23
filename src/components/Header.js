import React from "react";
import "./styles/Header.css";

const Header = () => {
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
                    <div className="user_container">
                        <a href="/">
                            <i className="far fa-user-circle"></i>
                        </a>
                        <div className="menu_text">
                            <span>Bienvenid@</span>
                        </div>
                    </div>
                </li>
                <li>
                    <i className="fas fa-shopping-cart"></i>
                </li>
            </ul>
            <ul className="responsive_menu">
                <li>
                    <i className="fas fa-search"></i>
                </li>
                <li>
                    <i className="far fa-user-circle"></i>
                </li>
                <li>
                    <i className="fas fa-shopping-cart"></i>
                </li>
                <li className="menu_responsive_icon">
                    <a href="/">
                        <i className="fas fa-bars"></i>
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Header;
