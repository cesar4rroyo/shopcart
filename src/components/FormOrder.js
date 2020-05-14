import React from "react";

const FormOrder = (props) => {
    return (
        <div className="cart">
            <form onSubmit={props.submitFx}>
                <ul className="form-container">
                    <li>
                        <label htmlFor="email">Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            onChange={props.onChangeFx}
                        />
                    </li>
                    <li>
                        <label htmlFor="name">Name</label>
                        <input
                            name="name"
                            type="text"
                            required
                            onChange={props.onChangeFx}
                        />
                    </li>
                    <li>
                        <label htmlFor="address">Address</label>
                        <input
                            name="address"
                            type="text"
                            required
                            onChange={props.onChangeFx}
                        />
                    </li>
                    <li>
                        <button className="btn primary" type="submit">
                            Checkout
                        </button>
                    </li>
                </ul>
            </form>
        </div>
    );
};

export default FormOrder;
