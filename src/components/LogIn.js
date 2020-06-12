import React, { useState } from "react";
import HeaderAdmin from "./HeaderAdmin";
import Auth from "../auth/Auth";

const LogIn = (props) => {
    const [email, setemail] = useState("");
    const [pass, setPass] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "admin@gmail.com" && pass === "admin") {
            Auth.login(() => {
                props.history.replace("/admin");
            });
        }
    };
    const handleEmail = (e) => {
        setemail(e.target.value);
    };
    const handlePass = (e) => {
        setPass(e.target.value);
    };

    return (
        <React.Fragment>
            <HeaderAdmin></HeaderAdmin>
            <div className="form_container">
                <form
                    className="text-center border border-light p-5"
                    onSubmit={handleSubmit}
                >
                    <p className="h1 mb-4">Sig In</p>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control mb-4"
                        onChange={handleEmail}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control mb-4"
                        onChange={handlePass}
                    />
                    <button
                        className="btn btn-success btn-block my-4"
                        type="submit"
                    >
                        Sign in
                    </button>
                </form>
            </div>
        </React.Fragment>
    );
};

export default LogIn;
