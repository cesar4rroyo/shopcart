import React from "react";

const Proceed = (props) => {
    return (
        <div className="total_container">
            <div className="total">
                <div className="value_container">
                    Total:
                    <span className="total_value"> ${props.children}</span>
                </div>
                <div className="total_btn_actions">
                    <button className="close_btn" onClick={props.onClose}>
                        Cerrar
                    </button>
                    <button className="proceed_btn" onClick={props.proceedBtn}>
                        Proceder compra
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Proceed;
