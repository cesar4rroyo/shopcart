import React from "react";

const Proceed = (props) => {
    return (
        <div className="cart">
            <div className="total">
                <div>Total: ${props.children}</div>
                <button className="btn primary" onClick={props.proceedBtn}>
                    Proceed
                </button>
            </div>
        </div>
    );
};

export default Proceed;
