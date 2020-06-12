import React from "react";
import { Link } from "react-router-dom";
import Auth from "../auth/Auth";

const HeaderAdmin = (props) => {
    return (
        <header className="header_admin_section">
            <Link to="/">
                <img src="logo192.png" alt="logo" />
            </Link>
            <h2>React Shop Cart</h2>
            {Auth.isAuthenticated() ? (
                <button
                    onClick={() => {
                        Auth.logout(() => {
                            props.props.history.push("/");
                        });
                    }}
                >
                    Log Out
                </button>
            ) : null}
        </header>
    );
};

export default HeaderAdmin;
