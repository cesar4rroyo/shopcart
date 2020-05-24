import React from "react";

const SearchResponsive = (props) => {
    return (
        <div className="form_responsive_container">
            <form>
                <input type="text" placeholder="¿Qué estas buscando?" />
                <span onClick={props.onClose} className="close_search">
                    x
                </span>
            </form>
        </div>
    );
};

export default SearchResponsive;
